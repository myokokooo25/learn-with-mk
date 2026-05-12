// ====================================================================
// MANAGE CLIENT ACCESS KEYS HERE
// ====================================================================
// This file separates permanent keys from trial keys.
//
// HOW TO GENERATE A NEW KEY:
// 1. Open your browser's developer console (usually F12).
// 2. Type: Math.random().toString(36).substring(2, 12).toUpperCase()
// 3. Press Enter. A new 10-character key will be generated.
// 4. Copy the key and add it to the appropriate list below.

// --- Permanent Client Keys (No Expiration) ---
export const VALID_ACCESS_KEYS: string[] = [
  'A1B2C3D4E5',
  'F6G7H8I9J0',
  'K1L2M3N4P5',
  'V1W2X3Y4Z5',
  'A9B8C7D6E5',
  'F4G3H2I1J0',
  'K9L8M7N6P5',
  'V9W8X7Y6Z5',
  '8JS2X6Y7Z8',
  'QW4E5R6T7Y',
  'U8I9O0P1A2',
  'S3D4F5G6H7',
  'J8K9L0Z1X2',
  'C3V4B5N6M7',
  '1Q2W3E4R5T',
  '6Y7U8I9O0P',
  'Z1X2C3V4B5',
  'N6M7J8K9L0',
  'P9O8I7U6Y5',
  'T4R3E2W1Q0',
  'M1N2B3V4C5',
  'X6Z7L8K9J0',
  'H1G2F3D4S5',
  'A6P7O8I9U0',
  'Y1T2R3E4W5',
  'Q6A7Z8S9X0',
  'E1D2C3F4V5',
  'G6T7B8H9N0',
  'U1J2M3K4I5',
  'L6P7O8A9S0',
  'D1F2G3H4J5',
  'K6L7Z8X9C0',
  'V1B2N3M4Q5',
  'W6E7R8T9Y0',
  'U1I2O3P4A5',
  'S6D7F8G9H0',
  'J1K2L3Z4X5',
  'C6V7B8N9M0',
  '3G4H5J6K7L',
  '8M9N0B1V2C',
  'XZ5Y4W3E2R',
  'T1S2D3F4G5',
  'H6J7K8L9P0',
  'QAZWSXEDCR',
  'FVTGBYHNUJ',
  'MIKOLP1234',
  '5T6Y7U8I9O',
  'ABCDE12345',
  'MAUNGGYIPASSTHEEXAM',
  'CHAMPIONMANU',
  'KHINLAYPASSTHEXAM',
  'BESTFRIEND',
];

// --- Trial Keys (Expire 15 minutes after first use) ---
export const TRIAL_ACCESS_KEYS: string[] = [
  'TESTKEY001',
  'TESTKEY002',
  'UNIVERSALCODE',
];