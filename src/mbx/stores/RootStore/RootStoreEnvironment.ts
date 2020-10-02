import { Repositories } from 'shared/repositories';
import { IUiViewModelInstance, UiViewModel } from 'mbx/models';

export interface IEnvironmentRepositories {
  Repositories: typeof Repositories;
}

export interface IRootStoreEnvironment {
  Repositories: typeof Repositories;
  uiView: IUiViewModelInstance;
}

export const RootStoreEnv: IRootStoreEnvironment = {
  Repositories,
  uiView: UiViewModel.create(
    {},
    {
      Repositories,
    }
  ),
};

export interface IUiViewEnvironment extends IEnvironmentRepositories {}
