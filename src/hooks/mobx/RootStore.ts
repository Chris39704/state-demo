import { getEnv } from 'mobx-state-tree';
import { useStoreFromContextHelper } from 'mbx/helpers';
import { IRootStoreInstance, RootStoreContext } from 'mbx/stores';

export const useRootContextData = <DataSelection>(
  dataSelector: (store: IRootStoreInstance) => DataSelection
) =>
  useStoreFromContextHelper(
    RootStoreContext,
    (contextData) => contextData!,
    dataSelector
  );

export const useRootContextDataMap = <
  T extends keyof IRootStoreInstance,
  V extends IRootStoreInstance
>(
  dataSelector: (store: IRootStoreInstance) => Partial<V> & Pick<V, T>
) =>
  useStoreFromContextHelper(
    RootStoreContext,
    (contextData) => contextData!,
    dataSelector
  );

export const useRootStoreWithDataMap = <
  T extends IRootStoreInstance,
  K extends keyof IRootStoreInstance
>(
  dataSelector: (store: IRootStoreInstance) => Partial<T> & Pick<T, K>
) =>
  useStoreFromContextHelper(
    RootStoreContext,
    (contextData) => contextData!,
    dataSelector
  );

export const useUIView = () =>
  useRootContextData((store) => ({ uiView: getEnv(store).uiView }));
