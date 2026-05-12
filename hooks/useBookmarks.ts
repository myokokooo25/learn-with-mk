import { useState, useEffect, useCallback } from 'react';

const BOOKMARKS_KEY = 'study_app_bookmarks';

export const useBookmarks = () => {  
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedBookmarks = localStorage.getItem(BOOKMARKS_KEY);
      if (storedBookmarks) {
        setBookmarkedIds(new Set(JSON.parse(storedBookmarks)));
      }
    } catch (e) {
      console.error("Failed to load bookmarks from localStorage", e);
      setBookmarkedIds(new Set());
    }
    setLoading(false);
  }, []);

  const toggleBookmark = useCallback((cardId: string) => {
    setBookmarkedIds(prevIds => {
      const newIds = new Set(prevIds);
      if (newIds.has(cardId)) {
        newIds.delete(cardId);
      } else {
        newIds.add(cardId);
      }
      try {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(Array.from(newIds)));
      } catch (e) {
        console.error("Failed to save bookmarks to localStorage", e);
      }
      return newIds;
    });
  }, []);

  return { bookmarkedIds, toggleBookmark, loading };
};
