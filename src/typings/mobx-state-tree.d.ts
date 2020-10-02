import { IAnyStateTreeNode } from 'mobx-state-tree';
import { IUiViewModelInstance } from 'mbx/models/uiView';
import {
  IRootStoreEnvironment,
  IUiViewEnvironment,
} from 'mbx/stores/RootStore/RootStoreEnvironment';

// Overloading getEnv for ease of development
declare module 'mobx-state-tree' {
  function getEnv<T extends IRootStoreEnvironment>(
    target: IAnyStateTreeNode
  ): T;
  function getEnv<T extends IUiViewEnvironment>(
    target: IUiViewModelInstance
  ): T;
}
