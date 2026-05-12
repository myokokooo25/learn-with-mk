import { StudyCardData } from '../types';
import { chapter2Part1Data } from './chapter2-part1';
import { chapter2Part2Data } from './chapter2-part2';
import { chapter2Part3Data } from './chapter2-part3';
import { chapter2Part4Data } from './chapter2-part4';

export const chapter2Data: StudyCardData[] = [
  ...chapter2Part1Data,
  ...chapter2Part2Data,
  ...chapter2Part3Data,
  ...chapter2Part4Data,
].map(card => {
  // Ensure all question IDs start with "2-"
  const newId = card.id.startsWith("2-") ? card.id : `2-${card.id}`;
  return { ...card, id: newId };
});