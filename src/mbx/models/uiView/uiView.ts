import {
  getEnv,
  Instance,
  SnapshotIn,
  SnapshotOut,
  types,
} from 'mobx-state-tree';
import { UI_VIEW_MODEL } from 'shared/constants/ModelNames';
import { UiViewPlaceholderInfo } from './uiViewIndependents';

export const UiViewModelCore = types
  .model(UI_VIEW_MODEL, {
    isReadOnly: types.optional(types.boolean, false),
  })
  .views((self) => ({
    get envRepos() {
      return getEnv(self).Repositories;
    },
  }));

export interface IUiViewModelCoreInstance
  extends Instance<typeof UiViewModelCore> {}

export const UiViewModelProperties = types.compose(
  UiViewModelCore,
  UiViewPlaceholderInfo,
);
export interface IUiViewModelPropsInstance
  extends Instance<typeof UiViewModelProperties> {}

export const UiViewModel = UiViewModelProperties.views((self) => ({
  get utcDateMoment() {
    return '';
  },
})).actions((self) => ({
  setIsReadOnly(value: boolean) {
    self.isReadOnly = value;
  },
}));

export interface IUiViewModelInstance extends Instance<typeof UiViewModel> {}
export interface IUiViewModelSnapshotIn
  extends SnapshotIn<typeof UiViewModel> {}
export interface IUiViewModelSnapshotOut
  extends SnapshotOut<typeof UiViewModel> {}
