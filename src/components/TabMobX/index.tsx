import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MobXUserCard } from 'components/UserCardMobX';
import { observer } from 'mobx-react-lite';
import { useUserStoreWithDataMap } from 'hooks/mobx/UserStore';

const MobXTabsTSX = () => {
  const { userIds } = useUserStoreWithDataMap((store) => ({
    userIds: store.userIds,
  }));

  return (
    <div>
      <Grid container>
        {userIds.map((id: string) => (
          <MobXUserCard key={id} id={id} />
        ))}
      </Grid>
    </div>
  );
};

export const MobXTabs = observer(MobXTabsTSX);
