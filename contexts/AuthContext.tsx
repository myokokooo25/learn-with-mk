import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { VALID_ACCESS_KEYS, TRIAL_ACCESS_KEYS } from '../data/keys';

// --- Helper Functions & Types ---

// This function sends login details to a backend endpoint.
// This endpoint is a placeholder and must be implemented on a server
// to handle the actual email sending to 'myokokooo.engr@gmail.com'.
const notifyLogin = async (accessKey: string, currentDeviceId: string, allDeviceIds: string[]) => {
  try {
    // We don't wait for this to complete to not block the login flow.
    fetch('/api/notify-login', { // Placeholder endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipient: 'myokokooo.engr@gmail.com',
        subject: `Login Notification for BESTFRIEND Key`,
        accessKey,
        currentDeviceId,
        allDeviceIds,
        deviceCount: allDeviceIds.length,
        timestamp: new Date().toISOString(),
      }),
    }).catch(error => {
      // Catch fetch errors separately since we're not awaiting
      console.error('Error sending login notification:', error);
    });
  } catch (error) {
    // This catch block might not be necessary due to .catch on fetch, but good for safety
    console.error('Error initiating login notification:', error);
  }
};


interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (accessKey: string) => Promise<boolean>;
  logout: () => void;
}

const getDeviceId = (): string => {
  let deviceId = sessionStorage.getItem('deviceId');
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    sessionStorage.setItem('deviceId', deviceId);
  }
  return deviceId;
};

// --- Mock Database in localStorage ---

const DEVICES_KEY = 'auth_devices_by_key';
const LOGGED_IN_USER_KEY = 'auth_loggedInUser_key';
const TRIAL_TIMESTAMPS_KEY = 'auth_trial_timestamps';
const DEVICE_HISTORY_KEY = 'auth_device_history';

// --- Access Key Configuration ---
const DEFAULT_DEVICE_LIMIT = 1;
const SPECIAL_ACCESS_KEY = 'BESTFRIEND';
const SPECIAL_KEY_DEVICE_LIMIT = 10;
const TRIAL_DURATION_MS = 15 * 60 * 1000; // 15 minutes


// --- Auth Context ---

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

 useEffect(() => {
    setLoading(true);
    try {
      const storedUserJSON = localStorage.getItem(LOGGED_IN_USER_KEY);
      if (storedUserJSON) {
        const storedUser = JSON.parse(storedUserJSON) as User;
        const deviceId = getDeviceId();
        const devices = JSON.parse(localStorage.getItem(DEVICES_KEY) || '{}');
        const keyDevices: string[] = devices[storedUser.accessKey] || [];

        // Check if this device is still authorized for permanent keys
        if (VALID_ACCESS_KEYS.includes(storedUser.accessKey) && !keyDevices.includes(deviceId)) {
          // This device was removed by another login, so log it out.
          logout(); 
        } else {
          setUser(storedUser);
        }
      }
    } catch (err) {
      console.error("Failed to process user from localStorage", err);
      localStorage.removeItem(LOGGED_IN_USER_KEY);
    }
    setLoading(false);
  }, []);

  const login = async (accessKey: string): Promise<boolean> => {
    setError(null);
    setLoading(true);
    
    const upperAccessKey = accessKey.toUpperCase();

    const isPermanentKey = VALID_ACCESS_KEYS.includes(upperAccessKey);
    const isTrialKey = TRIAL_ACCESS_KEYS.includes(upperAccessKey);

    // 1. Check if the access key is valid at all
    if (!isPermanentKey && !isTrialKey) {
      setError("Invalid Redeem Code.");
      setLoading(false);
      return false;
    }
    
    // 2. Handle Trial Keys: Check for expiration (NO device limit)
    if (isTrialKey) {
        const trialTimestamps = JSON.parse(localStorage.getItem(TRIAL_TIMESTAMPS_KEY) || '{}');
        const firstUseTime = trialTimestamps[upperAccessKey];

        if (firstUseTime) {
            const elapsedTime = Date.now() - firstUseTime;
            if (elapsedTime > TRIAL_DURATION_MS) {
                setError("Trial key has expired.");
                setLoading(false);
                return false;
            }
        } else {
            // First time use, record the timestamp
            trialTimestamps[upperAccessKey] = Date.now();
            localStorage.setItem(TRIAL_TIMESTAMPS_KEY, JSON.stringify(trialTimestamps));
        }
    }

    // 3. Handle Permanent Keys: Check device limit
    if (isPermanentKey) {
        const devices = JSON.parse(localStorage.getItem(DEVICES_KEY) || '{}');
        const deviceId = getDeviceId();
        let keyDevices: string[] = devices[upperAccessKey] || [];
        
        const limit = upperAccessKey === SPECIAL_ACCESS_KEY ? SPECIAL_KEY_DEVICE_LIMIT : DEFAULT_DEVICE_LIMIT;

        if (!keyDevices.includes(deviceId)) {
             if (keyDevices.length >= limit) {
                // Device limit reached, remove the oldest device
                keyDevices.shift();
            }
            keyDevices.push(deviceId);
            devices[upperAccessKey] = keyDevices;
            localStorage.setItem(DEVICES_KEY, JSON.stringify(devices));
        }


        if (upperAccessKey === SPECIAL_ACCESS_KEY) {
            // Re-read from localStorage to ensure we have the latest list for the notification
            const updatedDevices = JSON.parse(localStorage.getItem(DEVICES_KEY) || '{}');
            const updatedKeyDevices = updatedDevices[upperAccessKey] || [];
            // Asynchronously send notification, don't block login flow
            notifyLogin(upperAccessKey, deviceId, updatedKeyDevices);
        }
    }

    // 4. Record login history
    try {
      const historyJSON = localStorage.getItem(DEVICE_HISTORY_KEY);
      const history = historyJSON ? JSON.parse(historyJSON) : [];
      const newEntry = {
        deviceId: getDeviceId(),
        accessKey: upperAccessKey,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      };
      history.push(newEntry);
      localStorage.setItem(DEVICE_HISTORY_KEY, JSON.stringify(history));
    } catch (err) {
      console.error("Failed to record device history", err);
    }
    
    // 5. Set user state (if all checks passed for the respective key type)
    const userData: User = { accessKey: upperAccessKey };
    localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(userData));
    setUser(userData);
    setLoading(false);
    return true;
  };

  const logout = () => {
    // Do not remove device from list on logout to enforce device limit policy
    localStorage.removeItem(LOGGED_IN_USER_KEY);
    setUser(null);
    // Do not remove deviceId from session storage on manual logout
  };

  const value = { user, loading, error, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};