import { types } from 'mobx-state-tree';

export const UiViewPlaceholderInfo = types
  .model({
    showPlaceholderInfo: types.optional(types.boolean, false),
  })
  .views((self) => ({
    get isPlaceholderInfoValid() {
      return true;
    },
  }))
  .actions((self) => ({
    togglePlaceholderInfo() {
      self.showPlaceholderInfo = !self.showPlaceholderInfo;
    },
  }));
