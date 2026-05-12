import React, { useState, useMemo, useEffect } from 'react';
import Card from './Card';
import KanjiTooltip from './KanjiTooltip';
import Dropdown from './Dropdown';
import { studyDataByChapter, chapterCount } from '../data/content';
import { kanjiDictionary } from '../data/kanji';
import { Kanji } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { LogoutIcon, LogoIcon, BookmarkIcon, SearchIcon, BookOpenIcon, PencilIcon, GlobeIcon, RefreshIcon, UsersIcon, TrashIcon, ClockIcon, ChevronLeftIcon, ListBulletIcon, CheckCircleSolidIcon, BellIcon } from './Icons';
import { useBookmarks } from '../hooks/useBookmarks';
import { VALID_ACCESS_KEYS } from '../data/keys';

interface HistoryEntry {
  deviceId: string;
  accessKey: string;
  timestamp: string;
  userAgent: string;
}

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const { language, toggleLanguage } = useLanguage();
  const { bookmarkedIds } = useBookmarks();
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [activeChapter, setActiveChapter] = useState(1);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [studyAnswers, setStudyAnswers] = useState<{[key: string]: number}>({});

  const [activeKanji, setActiveKanji] = useState<Kanji | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  
  const [view, setView] = useState<'study' | 'list'>('study');

  // Admin View State
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [adminLoginError, setAdminLoginError] = useState('');
  const [isAdminViewVisible, setIsAdminViewVisible] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [itemToDelete, setItemToDelete] = useState<{key: string; deviceId: string} | null>(null);
  const [devicesData, setDevicesData] = useState<{ [key: string]: string[] }>({});
  const [historyData, setHistoryData] = useState<HistoryEntry[]>([]);
  const [adminTab, setAdminTab] = useState<'active' | 'history'>('active');


  // Constants for Admin View
  const DEFAULT_DEVICE_LIMIT = 1;
  const SPECIAL_ACCESS_KEY = 'BESTFRIEND';
  const SPECIAL_KEY_DEVICE_LIMIT = 10;
  const DEVICES_KEY = 'auth_devices_by_key';
  const DEVICE_HISTORY_KEY = 'auth_device_history';
  const ADMIN_PASSCODE = '454879';


  const loadDevicesData = () => {
    try {
      const devicesJSON = localStorage.getItem(DEVICES_KEY);
      setDevicesData(devicesJSON ? JSON.parse(devicesJSON) : {});
    } catch (e) {
      console.error("Failed to parse device data from localStorage", e);
      setDevicesData({});
    }
  };

  const loadHistoryData = () => {
    try {
      const historyJSON = localStorage.getItem(DEVICE_HISTORY_KEY);
      setHistoryData(historyJSON ? JSON.parse(historyJSON) : []);
    } catch (e) {
      console.error("Failed to parse history data from localStorage", e);
      setHistoryData([]);
    }
  };

  useEffect(() => {
    if (isAdminViewVisible) {
      loadDevicesData();
      loadHistoryData();
    }
  }, [isAdminViewVisible]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.toLowerCase() === 'mkkocheck') {
      setShowAdminLogin(true);
      setAdminPassword('');
      setAdminLoginError('');
      setSearchQuery(''); // Clear input field
    } else {
      if (isAdminViewVisible) setIsAdminViewVisible(false);
      setSearchQuery(value);
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSCODE) {
      setIsAdminViewVisible(true);
      setShowAdminLogin(false);
      setAdminPassword('');
    } else {
      setAdminLoginError('Incorrect Passcode.');
    }
  };

  const handleDeleteRequest = (key: string, deviceId: string) => {
    setItemToDelete({ key, deviceId });
    setDeletePassword('');
    setDeleteError('');
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = (e: React.FormEvent) => {
    e.preventDefault();
    if (deletePassword === ADMIN_PASSCODE && itemToDelete) {
      const currentDevices = JSON.parse(localStorage.getItem(DEVICES_KEY) || '{}');
      
      if (currentDevices[itemToDelete.key]) {
        currentDevices[itemToDelete.key] = currentDevices[itemToDelete.key].filter(
          (id: string) => id !== itemToDelete.deviceId
        );
        if (currentDevices[itemToDelete.key].length === 0) {
          delete currentDevices[itemToDelete.key];
        }
      }

      localStorage.setItem(DEVICES_KEY, JSON.stringify(currentDevices));
      loadDevicesData(); // Refresh view state

      // Close modal
      setShowDeleteConfirm(false);
      setItemToDelete(null);
    } else {
      setDeleteError('Incorrect Passcode.');
    }
  };


  const handleKanjiClick = (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => {
    const kanjiData = kanjiDictionary[kanji];
    if (kanjiData) {
      const rect = event.currentTarget.getBoundingClientRect();
      setActiveKanji(kanjiData);
      setTooltipPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };

  const handleCloseTooltip = () => {
    setActiveKanji(null);
  };

  const currentChapterData = useMemo(() => studyDataByChapter[activeChapter] || [], [activeChapter]);

  const filteredData = useMemo(() => {
    let data = currentChapterData;

    if (showOnlyBookmarked) {
      data = data.filter(item => bookmarkedIds.has(item.id));
    }

    if (searchQuery.trim() !== '') {
      const lowercasedQuery = searchQuery.toLowerCase().trim();
      data = data.filter(item => {
        const inQuestionJP = item.questionJP.toLowerCase().includes(lowercasedQuery);
        const inQuestionMY = item.questionMY.toLowerCase().includes(lowercasedQuery);
        const inOptions = item.options.some(opt => 
          opt.textMY.toLowerCase().includes(lowercasedQuery) ||
          opt.textJP.toLowerCase().includes(lowercasedQuery)
        );
        return inQuestionJP || inQuestionMY || inOptions;
      });
    }

    return data;
  }, [currentChapterData, showOnlyBookmarked, bookmarkedIds, searchQuery]);

  // Reset states when filters or chapter change
  useEffect(() => {
    setCurrentCardIndex(0);
    setStudyAnswers({});
    setView('study'); // Go back to study view when chapter changes
  }, [activeChapter, showOnlyBookmarked, searchQuery]);

  const goToNextCard = () => {
    setCurrentCardIndex(prev => Math.min(prev + 1, filteredData.length - 1));
  };
  
  const goToPreviousCard = () => {
    setCurrentCardIndex(prev => Math.max(prev - 1, 0));
  };
  
  const handleChapterChange = (chapter: number) => {
    setActiveChapter(chapter);
  }

  const handleQuestionSelect = (index: number) => {
    setCurrentCardIndex(index);
    setView('study');
  };
  
  const handleOptionSelect = (cardId: string, optionId: number) => {
    if (studyAnswers[cardId] !== undefined) return; // Already answered
    setStudyAnswers(prev => ({...prev, [cardId]: optionId}));
  };

  const currentCard = filteredData[currentCardIndex];
  
  const chapterOptions = Array.from({ length: chapterCount }, (_, i) => ({
    value: i + 1,
    label: `Chapter ${i + 1}`,
  }));

  const answeredIDsInFilter = useMemo(() => {
    const filteredIds = new Set(filteredData.map(c => c.id));
    return Object.keys(studyAnswers).filter(answeredId => filteredIds.has(answeredId));
  }, [studyAnswers, filteredData]);
  
  const answeredCount = answeredIDsInFilter.length;

  const correctCount = useMemo(() => {
    return answeredIDsInFilter.reduce((count, cardId) => {
      const card = filteredData.find(c => c.id === cardId);
      if (card && studyAnswers[cardId] === card.correctOptionId) {
        return count + 1;
      }
      return count;
    }, 0);
  }, [studyAnswers, filteredData, answeredIDsInFilter]);

  const renderContent = () => {
    if (isAdminViewVisible) {
      // Admin view remains dark-themed for distinction
      return (
         <div className="space-y-4 p-4 rounded-xl shadow-neumorphic-inset bg-slate-800">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                    <UsersIcon className="w-8 h-8 text-blue-400" />
                    Admin Panel
                </h2>
            </div>
            {/* Tabs and content for admin panel... */}
        </div>
      );
    }
    
    if (view === 'list') {
        return (
            <div className="bg-neumorphic-bg/95 mk-glass-panel rounded-2xl p-3 shadow-neumorphic-inset ring-1 ring-white/30 sm:p-4">
                <div className="p-4 border-b border-neumorphic-shadow-dark/20">
                    <h2 className="text-lg font-semibold text-neumorphic-text">Question Bank - Chapter {activeChapter}</h2>
                </div>
                <ul className="divide-y divide-neumorphic-shadow-dark/20 max-h-[min(70vh,calc(100dvh-13rem))] overflow-y-auto overscroll-contain rounded-xl pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                    {filteredData.map((card, index) => {
                        const isAnswered = studyAnswers[card.id] !== undefined;
                        const isCorrect = isAnswered && studyAnswers[card.id] === card.correctOptionId;
                        return (
                             <li key={card.id}>
                                <button
                                  type="button"
                                  onClick={() => handleQuestionSelect(index)}
                                  className="mk-touch-btn flex w-full items-start justify-between gap-4 rounded-xl p-4 text-left transition-all duration-200 hover:bg-white/35 active:bg-white/45 min-h-[56px]"
                                >
                                    <div className="flex-1">
                                        <p className="font-semibold text-slate-600">Question {card.id}</p>
                                        <p className="text-sm text-slate-500">
                                            {language === 'my' ? card.questionMY : card.questionJP.replace(/<[^>]+>/g, '')}
                                        </p>
                                    </div>
                                    {isAnswered && (
                                        <CheckCircleSolidIcon className={`w-6 h-6 shrink-0 mt-0.5 ${isCorrect ? 'text-green-500' : 'text-red-500'}`} />
                                    )}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    if (filteredData.length === 0) {
      return (
        <div className="text-center py-16 px-6 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset">
          {searchQuery ? (
            <>
              <SearchIcon className="w-12 h-12 mx-auto text-slate-400" />
              <h3 className="mt-2 text-lg font-semibold text-slate-600">No Results Found</h3>
              <p className="mt-1 text-sm text-slate-500">
                Your search for "{searchQuery}" did not match any questions in this chapter.
              </p>
            </>
          ) : showOnlyBookmarked ? (
            <>
              <BookmarkIcon className="w-12 h-12 mx-auto text-slate-400" />
              <h3 className="mt-2 text-lg font-semibold text-slate-600">No Bookmarked Questions</h3>
              <p className="mt-1 text-sm text-slate-500">
                No bookmarked questions found in this chapter.
              </p>
            </>
          ) : (
             <>
              <PencilIcon className="w-12 h-12 mx-auto text-slate-400" />
              <h3 className="mt-2 text-lg font-semibold text-slate-600">No Questions Available</h3>
              <p className="mt-1 text-sm text-slate-500">
                  There are no questions in this chapter yet.
              </p>
            </>
          )}
        </div>
      );
    }

    return (
      <div>
        <p className="mb-6 text-center text-base text-slate-600">
          Showing question <span className="font-semibold text-slate-700">{currentCardIndex + 1}</span> of <span className="font-semibold text-slate-700">{filteredData.length}</span>
        </p>

        <Card 
          key={currentCard.id} 
          data={currentCard}
          onKanjiClick={handleKanjiClick}
          mode="study"
          onOptionSelect={(optionId) => handleOptionSelect(currentCard.id, optionId)}
          selectedOptionId={studyAnswers[currentCard.id]}
          isSubmitted={studyAnswers[currentCard.id] !== undefined}
        />
        
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-stretch">
          <button
            type="button"
            onClick={goToPreviousCard}
            disabled={currentCardIndex === 0}
            className="mk-touch-btn min-h-[48px] flex-1 rounded-2xl bg-neumorphic-bg px-5 py-3.5 text-sm font-semibold text-neumorphic-text shadow-neumorphic-outset transition hover:shadow-mk-float active:shadow-neumorphic-inset disabled:cursor-not-allowed disabled:opacity-45"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={goToNextCard}
            disabled={currentCardIndex === filteredData.length - 1}
            className="mk-touch-btn min-h-[48px] flex-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-mk-float transition hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:brightness-100"
          >
            Next
          </button>
        </div>
      </div>
    );
  };


  return (
    <div className="min-h-[100dvh] min-h-screen mk-app-bg">
       {showAdminLogin && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm p-8 space-y-6 bg-slate-900 rounded-xl shadow-xl ring-1 ring-white/10">
            {/* Admin Login remains dark themed */}
            <h2 className="text-xl font-bold text-center text-slate-100">Admin Access</h2>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} className="block w-full px-4 py-3 bg-slate-800 placeholder-gray-400 border border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm text-slate-100" placeholder="Enter Passcode" autoComplete="off" autoFocus />
              {adminLoginError && <p className="text-sm text-center text-red-400">{adminLoginError}</p>}
              <div className="flex gap-4 pt-2">
                <button type="button" onClick={() => setShowAdminLogin(false)} className="w-full px-4 py-2 text-sm font-semibold bg-slate-600 text-slate-200 rounded-lg hover:bg-slate-500 transition-colors">Cancel</button>
                <button type="submit" className="w-full px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          {/* Admin modal remains dark themed */}
        </div>
      )}

      <KanjiTooltip 
        kanjiData={activeKanji}
        position={tooltipPosition}
        onClose={handleCloseTooltip}
      />
      <header className="sticky top-0 z-20 w-full border-b border-white/40 bg-neumorphic-bg/80 backdrop-blur-xl supports-[backdrop-filter]:bg-neumorphic-bg/65 pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 pb-4 pt-2 sm:px-6 lg:flex-row lg:items-center lg:gap-5 lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:contents">
            <div className="flex min-w-0 items-center gap-3 lg:order-1 lg:shrink-0">
              <div className="rounded-full bg-gradient-to-br from-white/90 to-slate-100/50 p-2 shadow-mk-float ring-1 ring-white/60">
                <LogoIcon className="h-6 w-6 text-slate-700" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600">Learn with MK</p>
                <h1 className="truncate text-base font-bold text-slate-800 sm:text-lg">鉄骨製作管理 試験対策</h1>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:order-3">
              <button
                type="button"
                onClick={() => setShowOnlyBookmarked(!showOnlyBookmarked)}
                className={`mk-touch-btn flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 ${
                  showOnlyBookmarked
                    ? 'bg-white/50 text-slate-800 shadow-neumorphic-inset ring-1 ring-white/50'
                    : 'text-slate-600 shadow-neumorphic-outset ring-1 ring-white/30 active:shadow-neumorphic-inset'
                }`}
                aria-pressed={showOnlyBookmarked}
                title="Bookmarked only"
              >
                <BookmarkIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={toggleLanguage}
                className="mk-touch-btn flex h-11 w-11 items-center justify-center rounded-xl text-slate-600 shadow-neumorphic-outset ring-1 ring-white/30 active:shadow-neumorphic-inset"
                title="Language"
              >
                <GlobeIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={logout}
                className="mk-touch-btn flex h-11 w-11 items-center justify-center rounded-xl text-slate-600 shadow-neumorphic-outset ring-1 ring-white/30 active:shadow-neumorphic-inset hover:text-red-600"
                title="Logout"
              >
                <LogoutIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative w-full lg:order-2 lg:min-w-0 lg:flex-1 lg:max-w-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <SearchIcon className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="search"
              enterKeyHint="search"
              placeholder="Search questions…"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full rounded-2xl border-2 border-transparent bg-white/55 py-3.5 pl-11 pr-4 text-base text-slate-800 shadow-neumorphic-inset placeholder:text-slate-400 focus:bg-white/75 focus:outline-none focus:ring-2 focus:ring-indigo-400/35"
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
        </div>
      </header>
      <main
        className="mx-auto w-full max-w-7xl px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 sm:px-6 lg:px-8 lg:pb-10 lg:pt-6"
      >
        {!isAdminViewVisible ? (
          <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-8 xl:gap-10">
            <aside className="mb-6 space-y-4 lg:sticky lg:top-[calc(env(safe-area-inset-top)+5.75rem)] lg:col-span-4 xl:col-span-3 lg:mb-0">
              <div className="mk-glass-panel flex flex-col gap-4 rounded-2xl p-4 shadow-mk-float ring-1 ring-white/55">
                <div className="w-full min-w-0 flex-1">
                  <Dropdown
                    options={chapterOptions}
                    value={activeChapter}
                    onChange={(val) => handleChapterChange(Number(val))}
                    ariaLabel="Select Chapter"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setView(view === 'study' ? 'list' : 'study')}
                  className="mk-touch-btn relative flex min-h-[48px] w-full shrink-0 items-center justify-center rounded-xl bg-neumorphic-bg px-4 py-3 text-sm font-semibold text-neumorphic-text shadow-neumorphic-outset transition hover:shadow-mk-float active:shadow-neumorphic-inset"
                >
                  {view === 'study' ? <ListBulletIcon className="mr-2 h-5 w-5" /> : <ChevronLeftIcon className="mr-2 h-5 w-5" />}
                  {view === 'study' ? 'Question Bank' : 'Back to Study'}
                  <span className="absolute -right-1 -top-1 flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-white/90 px-1 text-xs font-bold text-slate-700 shadow-mk-float ring-1 ring-white/60">
                    {filteredData.length}
                  </span>
                </button>
              </div>

              {view === 'study' && (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="flex items-center justify-between rounded-2xl bg-neumorphic-bg p-4 shadow-mk-float ring-1 ring-white/40">
                    <div>
                      <p className="text-xs font-medium text-slate-500">Total</p>
                      <p className="text-2xl font-bold text-slate-800">{filteredData.length}</p>
                    </div>
                    <div className="rounded-full bg-white/40 p-3 shadow-neumorphic-inset">
                      <BookOpenIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-neumorphic-bg p-4 shadow-mk-float ring-1 ring-white/40">
                    <div>
                      <p className="text-xs font-medium text-slate-500">Answered</p>
                      <p className="text-2xl font-bold text-slate-800">{answeredCount}</p>
                    </div>
                    <div className="rounded-full bg-white/40 p-3 shadow-neumorphic-inset">
                      <PencilIcon className="h-6 w-6 text-violet-600" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-neumorphic-bg p-4 shadow-mk-float ring-1 ring-white/40">
                    <div>
                      <p className="text-xs font-medium text-slate-500">Correct</p>
                      <p className="text-2xl font-bold text-slate-800">{correctCount}</p>
                    </div>
                    <div className="rounded-full bg-white/40 p-3 shadow-neumorphic-inset">
                      <CheckCircleSolidIcon className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                </div>
              )}
            </aside>
            <div className="min-w-0 lg:col-span-8 xl:col-span-9">{renderContent()}</div>
          </div>
        ) : (
          renderContent()
        )}
      </main>
    </div>
  );
};

export default Dashboard;