import {
  types,
  getSnapshot,
  cast,
  Instance,
  SnapshotIn,
} from 'mobx-state-tree';
import { ChangeEvent } from 'react';
import { USER_MODEL } from 'shared';
import { USER_NAME_ERR } from 'shared/constants/Errors';

export const UserModel = types
  .model(USER_MODEL, {
    id: types.identifierNumber,
    name: types.optional(types.string, 'Ben Franklin'),
    dob: types.optional(types.string, new Date().toUTCString()),
    location: types.optional(types.string, 'Boston'),
    skills: types.array(types.string),
  })
  .volatile(() => ({
    showSkills: false,
  }))
  .views((self) => ({
    get isInvalid() {
      return self.name.length < 5 ? true : false;
    },
    get errText() {
      return this.isInvalid ? USER_NAME_ERR : '';
    },
  }))
  .actions((self) => ({
    changeName(event: ChangeEvent<{ value: unknown }>) {
      if (event.target.value && typeof event.target.value === 'string') {
        self.name = event.target.value;
      }
    },
    toggleShowSkills() {
      self.showSkills = !self.showSkills;
    },
    deleteSkill(skill: string) {
      self.skills = cast(self.skills.filter((sk) => sk !== skill));
    },
  }))
  .actions((self) => ({
    submitChanges() {
      console.info(JSON.stringify(getSnapshot(self), null, 2));
    },
  }));

export interface IUserModelInstance extends Instance<typeof UserModel> {}
export interface IUserModelSnapshotIn extends SnapshotIn<typeof UserModel> {}
