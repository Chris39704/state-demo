import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import UserCard from 'components/UserCardContext';
import { useUser, useUserDispatch } from 'hooks/UserContext';
import TYPES from 'utils/constants';
import { getUsers } from 'utils/api';
import { UserConsumer } from 'hooks/UserContext';

export default function SimpleTabs() {
  console.log('Rendering container');
  const dispatch = useUserDispatch();
  const ids = useUser('IDS', null);

  useEffect(() => {
    async function Users() {
      const usersList = await getUsers(2);
      // @ts-ignore

      dispatch({ type: TYPES.ADD_USER_CONTEXT, payload: usersList });
      }
      Users();
  }, [])

      // const ids: any = useUserIds();
      return (
      <Grid container>
      {ids.map((id: string) => <UserCard key={id} id={id} />)}
      </Grid>
      )
}