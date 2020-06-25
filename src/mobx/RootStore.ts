import { useContext, createContext } from 'react';
import { types, Instance, onSnapshot, addMiddleware } from 'mobx-state-tree';
import { UserStore, USER_STORE } from './UserStore';
import { useObserver } from 'mobx-react-lite';

const RootModel = types.model('ROOT_STORE', {
  [USER_STORE]: UserStore,
});

export const rootStore = RootModel.create({
  [USER_STORE]: {},
});

addMiddleware(rootStore, (call, next, abort) => {
  if (call.name === 'someActionFunction') {
    abort(undefined);
  } else {
    next(call);
  }
});

onSnapshot(rootStore[USER_STORE].allUsers, (snapshot) =>
  console.log('Snapshot: ', JSON.stringify(snapshot, null, 2))
);

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export function useMST() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return useObserver(() => store as RootInstance);
}
