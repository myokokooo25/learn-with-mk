
import { StudyCardData } from '../types';
import { chapter1Data } from './chapter1';
import { chapter2Data } from './chapter2';
import { chapter3Data } from './chapter3';
import { chapter4Data } from './chapter4';
import { chapter5Data } from './chapter5';

export const studyDataByChapter: { [key: number]: StudyCardData[] } = {
  1: chapter1Data,
  2: chapter2Data,
  3: chapter3Data,
  4: chapter4Data,
  5: chapter5Data,
};

export const chapterCount = Object.keys(studyDataByChapter).length;