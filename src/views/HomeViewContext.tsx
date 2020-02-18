import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from 'components/TabContext';
import { getUsers } from 'utils/api';
import useUsers, { UserContext } from 'hooks/UserContext';
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
  const [users, dispatch]: any = useUsers();

  useEffect(() => {
    async function Users() {
    const users = await getUsers(5);
    // @ts-ignore
    dispatch({ type: TYPES.ADD_USER_CONTEXT, payload: users });
    }
    Users();
  }, [dispatch])


  return (
    <UserContext.Provider value={users}>
    <Paper className={classes.root}>
      <Tabs />
    </Paper>
    </UserContext.Provider>
  );
}

export default HomeViewContext;
