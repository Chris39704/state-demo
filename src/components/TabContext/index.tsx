import React, { useEffect, useMemo, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import UserCard from 'components/UserCardContext';
import { useUser, useUserDispatch } from 'hooks/UserContext';
import TYPES from 'utils/constants';
import { getUsers } from 'utils/api';
import { UserConsumer } from 'hooks/UserContext';
import { makeUserIds } from 'context/userSelectors';

export default function SimpleTabs() {
  console.log('Rendering container');

  const dispatch = useUserDispatch();

  useEffect(() => {
    async function Users() {
      const usersList = await getUsers(2);
      dispatch({ type: TYPES.ADD_USER_CONTEXT, payload: usersList });
      }
      Users();
  }, [])

      return useMemo(() => (
      <UserConsumer>
        {(value: any) => {
      const ids: any = makeUserIds(value);
        return (
      <Grid container>
      {ids.map((id: string) => <UserCard key={id} id={id} /> )}
      </Grid>
        )}
  }
      </UserConsumer>
      ), [])
}