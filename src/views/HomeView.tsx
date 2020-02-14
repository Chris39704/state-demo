import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from 'components/TabComponent';
import { useDispatch } from'react-redux';
import { getUsers } from 'utils/api';
import TYPES from 'utils/constants';

export const HomeViewStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
    },
  })
);

const HomeView = () => {
  console.log('Rendering HomeView');
  const classes = HomeViewStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    async function Users() {
      // TODO: try this call in saga instead
    const users = await getUsers(1000);
    dispatch({ type: TYPES.ADD_USERS_SAGA, payload: users })
    }
    Users();
  }, [dispatch])


  return (
    <Paper className={classes.root}>
      <Tabs />
    </Paper>
  );
}

export default HomeView;
