import {
  cast,
  getEnv,
  Instance,
  ReferenceIdentifier,
  resolveIdentifier,
  types,
} from 'mobx-state-tree';
import { UserModel } from 'mbx/models';
import { USER_STORE } from 'shared';
import { getMockUsers } from 'utils/api';

export const UserStore = types
  .model(USER_STORE, {
    allUsers: types.array(UserModel),
  })
  .views((self) => ({
    get envRepos() {
      return getEnv(self).Repositories;
    },
  }))
  .views((self) => ({
    get userIds() {
      return self.allUsers.map((user: any) => user.id);
    },
    userById(id: ReferenceIdentifier) {
      return resolveIdentifier(UserModel, self.allUsers, id);
    },
  }))
  .actions((self) => ({
    afterCreate() {
      const users = getMockUsers(200);
      self.allUsers = cast(users);
    },
  }));

export interface IUserStoreInstance extends Instance<typeof UserStore> {}
