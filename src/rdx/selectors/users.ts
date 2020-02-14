import { createSelectorCreator, defaultMemoize } from 'reselect';
import { isEqual } from 'lodash';

const pullUser = (state: any, id: string) => state.users.get(id);
const pullUserIds = (state: any) => state.users.map((u: any) => u.id);

// @ts-ignore
const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export const makeUserIds = createDeepEqualSelector(pullUserIds, (userId) => userId);

export const makeUser = createDeepEqualSelector(pullUser, (user) => user);