import { PlaceholderRepository } from './placeholder/PlaceholderRepo';

export const Repositories = {
  phRepo: PlaceholderRepository,
} as const;

export type Repositories = typeof Repositories;
