import React from 'react';
import { Paper, makeStyles, createStyles } from '@material-ui/core';
import { MobXTabs } from 'components/TabMobX';
import { RootStore, RootContextProvider } from 'mbx/index';
import { observer } from 'mobx-react-lite';

export const HomeViewMobXStyle = makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
    },
  }),
);

const HomeViewMobXTSX = () => {
  console.log('Rendering HomeView');
  const classes = HomeViewMobXStyle();

  return (
    <RootContextProvider value={RootStore}>
      <Paper className={classes.root}>
        <MobXTabs />
      </Paper>
    </RootContextProvider>
  );
};

export const HomeViewMobX = observer(HomeViewMobXTSX);
