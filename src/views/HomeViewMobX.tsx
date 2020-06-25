import React from 'react';
import { Paper, makeStyles, createStyles, Theme } from '@material-ui/core';
import Tabs from 'components/TabMobX';
import { rootStore, Provider } from 'mobx/index';

export const HomeViewMobXStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
    },
  })
);

const HomeViewMobX = () => {
  console.log('Rendering HomeView');
  const classes = HomeViewMobXStyle();

  return (
    <Provider value={rootStore}>
      <Paper className={classes.root}>
        <Tabs />
      </Paper>
    </Provider>
  );
};

export default HomeViewMobX;

// export const User = observer(({ id }: { id: string }) => {
//   const currentUser = useUsers();

//   return (
//     <div>
//       <div>{currentUser?.name}</div>
//       <Button
//         onClick={currentUser?.submitChanges}
//         variant={"contained"}
//         color="primary"
//       >
//         Submit
//       </Button>
//     </div>
//   );
// });
