import { createSelectorCreator, defaultMemoize } from 'reselect';
import { isEqual } from 'lodash';

const pullUser = (state: any, id: string) => state.get(id);
const pullUserSkills = (state: any, id: string) => state.get(id)?.skills;
const pullUserIds = (state: any) => Array.from(state.keys());

// @ts-ignore
const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export const makeUserIds = createDeepEqualSelector(
  pullUserIds,
  (userId) => userId
);

export const makeUserSkills = createDeepEqualSelector(
  pullUserSkills,
  (skills) => skills
);

export const makeUser = createDeepEqualSelector(pullUser, (user) => user);
