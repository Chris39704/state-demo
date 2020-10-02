import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { spawn, Worker } from 'threads';
import { ObservablePromise } from 'threads/dist/observable-promise';
import { ModuleProxy } from 'threads/dist/types/master';

// import { getUsers } from 'utils/api';

export const HomeViewStyle = makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
    },
  }),
);

const HomeView = () => {
  console.log('Rendering HomeViewThreads');
  const [counter, setCounter] = useState<
    undefined | ((() => ObservablePromise<any>) & ModuleProxy<any>)
  >();
  const [currCount, setCurr] = useState(0);
  const classes = HomeViewStyle();

  if (counter) {
    counter.values().subscribe(({ count }: { count: number }) => {
      setCurr(count);
      console.log(`Count: ${count}`);
    });
  }

  const createCounter = async () => {
    const counterWorker = await spawn(new Worker('../workers/counter'));
    setCounter(counterWorker);
  };

  // await Thread.terminate(counter);
  // };

  if (!counter) {
    createCounter();
  }

  // const doCounter = async () => {
  //   const counterWorker = await spawn(new Worker('../workers/counter'));

  //   setCounter(counterWorker);

  //   // await counter.increment();
  //   // await counter.decrement();
  //   // await counter.increment();
  //   // await counter.increment();
  //   // await counter.decrement();
  //   // await counter.decrement();

  //   // await counter.finish();

  //   // await Thread.terminate(counter);
  // };

  const increment = () => {
    setTimeout(async () => {
      await counter?.increment();
    }, 1000);

    // await counter.finish();
  };

  const decrement = () => {
    setTimeout(async () => {
      await counter?.decrement();
    }, 1000);

    // await counter.finish();
  };

  // if (!counter) {
  //   doCounter();
  // }

  return (
    <Paper className={classes.root}>
      <Button color="primary" onClick={increment}>
        Increment +
      </Button>
      <h3>{currCount}</h3>
      <Button color="primary" onClick={decrement}>
        Decrement -
      </Button>
    </Paper>
  );
};

export default HomeView;
