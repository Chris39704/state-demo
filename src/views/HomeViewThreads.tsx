import React from 'react';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from 'components/TabComponent';
import { spawn, Thread, Worker } from "threads"
// import { getUsers } from 'utils/api';


export const HomeViewStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
    },
  })
);

const HomeView = async () => {
  console.log('Rendering HomeViewThreads');
  const classes = HomeViewStyle();



const counter = await spawn(new Worker("../workers/counter"))

counter.values().subscribe(({ min, max } : { min: number; max: number}) => {
  console.log(`Min: ${min} | Max: ${max}`)
})

await counter.increment();
await counter.decrement();
await counter.increment();
await counter.increment();
await counter.decrement();
await counter.decrement();

await counter.finish()

await Thread.terminate(counter)

  return (
    <Paper className={classes.root}>
      <Tabs />
    </Paper>
  );
}

export default HomeView;
