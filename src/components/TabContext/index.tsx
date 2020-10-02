import React, { useEffect, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import UserCard from 'components/UserCardContext';
import { useUserDispatch } from 'hooks/UserContext';
import TYPES from 'utils/constants';
import { getMockUsers } from 'utils/api';
import { UserConsumer } from 'hooks/UserContext';
import { makeUserIds } from 'context/userSelectors';

export default function SimpleTabs() {
  console.log('Rendering container');

  const dispatch = useUserDispatch();

  useEffect(() => {
    async function Users() {
      const usersList = getMockUsers(2);
      dispatch({ type: TYPES.ADD_USER_CONTEXT, payload: usersList });
    }
    Users();
  }, []);

  return useMemo(
    () => (
      <UserConsumer>
        {(value: any) => {
          const ids: any = makeUserIds(value);
          return (
            <Grid container>
              {ids.map((id: string) => (
                <UserCard key={id} id={id} />
              ))}
            </Grid>
          );
        }}
      </UserConsumer>
    ),
    []
  );
}
