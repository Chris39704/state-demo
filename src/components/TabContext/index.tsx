import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserCard from 'components/UserCardContext';
import useUser from 'hooks/Users';
import { makeUserIds } from 'context/userSelectors';

export default function SimpleTabs() {
  console.log('Rendering container');
  const ids = useUser(makeUserIds);

  return (
    <div>
      <Grid container>
      {ids.map((id: string) => <UserCard key={id} id={id} />)}
      </Grid>
    </div>
  );
}