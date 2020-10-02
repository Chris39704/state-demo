import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserCard from 'components/UserCard';
import { useSelector } from 'react-redux';
import { makeUserIds } from 'rdx/selectors';

export default function SimpleTabs() {
  const userIDs = useSelector((state: any) => makeUserIds(state))
    .valueSeq()
    .toArray();

  console.log('Rendering container');

  return (
    <div>
      <Grid container>
        {userIDs.map((id: string) => (
          <UserCard key={id} id={id} />
        ))}
      </Grid>
    </div>
  );
}
