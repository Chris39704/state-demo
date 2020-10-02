import { useStoreFromContextHelper } from 'mbx/helpers';
import { IUserStoreInstance, RootStoreContext } from 'mbx/stores';

export const useUserStore = <DataSelection>(
  dataSelector: (store: IUserStoreInstance) => DataSelection
) =>
  useStoreFromContextHelper(
    RootStoreContext,
    (contextData) => contextData!.USER_STORE,
    dataSelector
  );

export const useStrictUserStore = <
  T extends IUserStoreInstance,
  K extends keyof IUserStoreInstance
>(
  dataSelector: (store: IUserStoreInstance) => Partial<T> & Pick<T, K>
) =>
  useStoreFromContextHelper(
    RootStoreContext,
    (contextData) => contextData!.USER_STORE,
    dataSelector
  );

export const useUserStoreWithDataMap = <
  T extends IUserStoreInstance,
  K extends keyof IUserStoreInstance
>(
  dataSelector: (store: IUserStoreInstance) => Partial<T> & Pick<T, K>
) =>
  useStoreFromContextHelper(
    RootStoreContext,
    (contextData) => contextData!.USER_STORE,
    dataSelector
  );
