import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from 'components/TabContext';
import { getUsers } from 'utils/api';
import useUserContext, { UserContext } from 'hooks/UserContext';
import TYPES from 'utils/constants';

export const HomeViewContextStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
    },
  })
);

const HomeViewContext = () => {
  console.log('Rendering HomeViewContext');
  const classes = HomeViewContextStyle();
  const [ users, setUsers ] = useState(new Map());
  const { dispatch } = useUserContext();

  useEffect(() => {
  async function Users() {
    const usersList = await getUsers(5);
    // @ts-ignore

    dispatch({ type: TYPES.ADD_USER_CONTEXT, payload: usersList });
    setUsers(new Map(usersList.map((u:any) => [u.id, u])));
    }
    Users();
  }, [])


  return (
    <UserContext.Provider value={{ users, dispatch }}>
    <Paper className={classes.root}>
      <Tabs />
    </Paper>
    </UserContext.Provider>
  );
}

export default HomeViewContext;
