import axios from 'axios';

export const PlaceholderRepository = {
  findPlaceholderInfo: async (): Promise<any> => {
    try {
      return await Promise.resolve('something'); // await axios.get('/placeholderInfo');
    } catch (err) {
      throw new Error(
        'PlaceholderRepository -> `/placeholderInfo` endpoint failure'
      );
    }
  },
} as const;

export type PlaceholderRepository = typeof PlaceholderRepository[keyof typeof PlaceholderRepository];
