/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  types,
  Instance,
  SnapshotOut,
  SnapshotIn,
  getSnapshot,
} from 'mobx-state-tree';
import { ChangeEvent } from 'react';

export const USER_STORE = 'USER_STORE';

const UserModelProperties = types.model({
  id: types.identifier,
  name: types.optional(types.string, 'Joe'),
  skills: types.array(types.string),
});

const UserModelActions = UserModelProperties.views((self) => ({
  getId() {
    return self.id;
  },
}))
  .views((self) => ({
    get SomethingElse() {
      return null;
    },
  }))
  .actions((self) => ({
    changeName(
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ): void {
      self.name = event.target.value;
    },
    deleteSkill(skill: string): void {
      // self.skills = self.skills.filter(sk => sk !== skill);
    },
  }))
  .actions((self) => ({
    submitChanges() {
      console.log(getSnapshot(self));
    },
  }));

export const UserModel = types.compose(UserModelProperties, UserModelActions);

export const UserStore = types
  .model(USER_STORE, {
    allUsers: types.optional(types.array(UserModel), [{ id: '1' }]),
    editedPerson: types.safeReference(UserModel),
  })
  .views((self) => ({
    get UserIds() {
      // @ts-ignore
      return self.allUsers.map((user: any) => user.id);
    },
  }))
  .actions((self) => ({
    setDisplayedPerson(id: any) {
      self.editedPerson = id;
    },
  }));

export type UserStoreInstance = Instance<typeof UserStore>;

export type UserStoreSnapshotIn = SnapshotIn<typeof UserStore>;

export type UserStoreSnapshotOut = SnapshotOut<typeof UserStore>;
