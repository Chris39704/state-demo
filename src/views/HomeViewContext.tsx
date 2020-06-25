import React from 'react';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from 'components/TabContext';
import UserProvider from 'hooks/UserContext';

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

  return (
    <UserProvider>
      <Paper className={classes.root}>
        <Tabs />
      </Paper>
    </UserProvider>
  );
};

export default HomeViewContext;
