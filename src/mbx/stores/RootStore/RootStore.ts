import { getEnv, Instance, types, flow } from 'mobx-state-tree';
import { USER_STORE, ROOT_STORE } from 'shared/constants';
import { RootStoreEnv } from 'mbx/stores/RootStore';
import { UserStore } from 'mbx/stores/UserStore';
import { doIfDevOnly } from 'utils/functions';

export const RootStoreModel = types
  .model(ROOT_STORE, {
    [USER_STORE]: types.optional(UserStore, {}),
  })
  .volatile(() => ({
    something: null as string | null,
  }))
  .views((self) => ({
    get repos() {
      return getEnv(self).Repositories;
    },
    get uiView() {
      return getEnv(self).uiView;
    },
  }))
  .actions((self) => ({
    setSomething(something: any) {
      self.something = something;
    },
  }))
  .actions((self) => ({
    fetchSomething: flow(function* fetchSomething() {
      try {
        yield self.repos.phRepo.findPlaceholderInfo().then((response) => {
          self.setSomething(response);
        });
      } catch (error) {
        console.error(error);
      }
    }),
  }))
  .actions((self) => ({
    initialize: flow(function* initialize() {
      try {
        yield Promise.allSettled([self.fetchSomething()]);
      } catch (error) {
        console.error(error);
      }
    }),
  }));

export interface IRootStoreInstance extends Instance<typeof RootStoreModel> {}

// const RootStoreBase = isDev()
//   ? RootStoreModel.create(
//       {
//         // Some dev things why not
//       },
//       RootStoreEnv
//     )
//   : RootStoreModel.create({}, RootStoreEnv);

const RootStoreBase = RootStoreModel.create({}, RootStoreEnv);

doIfDevOnly(async () => {
  const watchRootPatch = false;
  const watchRootSnapshot = false;
  const watchUserStoreSnapshot = false;
  const addLogger = false;
  const addSimpleLogger = false;

  watchRootPatch &&
    (await import('mobx-state-tree')).onPatch(RootStoreBase, (patch) =>
      console.warn('Root Store Patch:', patch),
    );

  watchRootSnapshot &&
    (await import('mobx-state-tree')).onSnapshot(RootStoreBase, (snapshot) => {
      console.log('Root Snapshot:', JSON.stringify(snapshot, null, 2));
    });

  watchUserStoreSnapshot &&
    (await import('mobx-state-tree')).onSnapshot(
      RootStoreBase[USER_STORE],
      (snapshot) => {
        console.log('User Store Snapshot:', JSON.stringify(snapshot, null, 2));
      },
    );

  addLogger &&
    (await import('mobx-state-tree')).addMiddleware(
      RootStoreBase,
      (await import('mst-middlewares')).actionLogger,
    );

  addSimpleLogger &&
    (await import('mobx-state-tree')).addMiddleware(
      RootStoreBase,
      (await import('mst-middlewares')).simpleActionLogger,
    );
});

export const RootStore = RootStoreBase;
