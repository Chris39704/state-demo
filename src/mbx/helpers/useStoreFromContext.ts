import { useContext } from 'react';
import { useObserver } from 'mobx-react-lite';

export const useStoreFromContextHelper = <
  DataSelection,
  ContextData,
  MobXStore
>(
  context: React.Context<ContextData>,
  storeSelector: (contextData: ContextData) => MobXStore,
  dataSelector: (store: MobXStore) => DataSelection
) => {
  const value = useContext(context);
  if (!value) {
    throw new Error(
      `Context: ${context.displayName || ''} is null or undefined`
    );
  }
  const mobxStore = storeSelector(value);
  return useObserver(() => {
    return dataSelector(mobxStore);
  });
};
