import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from 'components/TabReact';
import { getUsers } from 'utils/api';

export const HomeViewContextStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
    },
  })
);

const HomeViewContext = () => {
  console.log('Rendering HomeViewReactOnly');
  const classes = HomeViewContextStyle();
  const [userList, setUserList] = useState([] as any);

  useEffect(() => {
    async function Users() {
      // TODO: try this call in saga instead
      const users = await getUsers(5);
      setUserList(users);
    }
    Users();
  }, []);

  return (
    <Paper className={classes.root}>
      <Tabs users={userList} />
    </Paper>
  );
};

export default HomeViewContext;
