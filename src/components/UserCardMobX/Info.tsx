import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { observer } from 'mobx-react-lite';
import { useUserStoreWithDataMap } from 'hooks/mobx/UserStore';

const MobXUserInfoTSX = ({ id }: { id: string }) => {
  const { userById } = useUserStoreWithDataMap((store) => ({
    userById: store.userById,
  }));

  const user = userById(id);

  return user && !user.showSkills ? (
    <CardContent>
      <TextField
        value={user.name}
        onChange={user.changeName}
        margin="dense"
        size="small"
        variant="outlined"
        error={user.isInvalid}
        helperText={user.errText}
      />
      <TextField
        value={user.dob}
        disabled
        margin="dense"
        size="small"
        variant="outlined"
      />
      <TextField
        value={user.location}
        disabled
        margin="dense"
        size="small"
        variant="outlined"
      />
    </CardContent>
  ) : null;
};

export const MobXUserInfo = observer(MobXUserInfoTSX);
