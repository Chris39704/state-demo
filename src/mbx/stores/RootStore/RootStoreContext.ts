import { createContext } from 'react';
import { IRootStoreInstance } from 'mbx/stores';

export const RootStoreContext = createContext<null | IRootStoreInstance>(null);

export const RootContextProvider = RootStoreContext.Provider;
