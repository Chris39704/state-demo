import { IObservableArray, observable, ObservableMap } from 'mobx';

type validator = () => boolean;
type action = () => void;

const doIf = (condition: validator) => (action: action) =>
  condition() ? action() : null;

export const isDev = () =>
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

export const doIfDevOnly = doIf(isDev);

export function groupByKey<T>(arr: T[], groupKey: keyof T) {
  return arr.reduce((acc, cur) => {
    if (!acc[cur[`${groupKey}`]]) {
      acc[cur[`${groupKey}`]] = [];
    }
    acc[cur[`${groupKey}`]].push(cur);
    return acc;
  }, {} as { [key: string]: T[] });
}

export function groupMapByKey<T>(
  arr: T[],
  groupKey: keyof T
): ObservableMap<any, IObservableArray<T>> {
  return arr.reduce((acc, cur) => {
    if (!acc.has(cur[`${groupKey}`])) {
      acc.set(cur[`${groupKey}`], observable.array());
    }

    if (cur != null) {
      acc.get(cur[`${groupKey}`])!.push(cur);
    }

    return acc;
  }, new ObservableMap<any, IObservableArray<T>>());
}
