// minmax.js
import { Subject, Observable } from "threads/observable"
import { expose } from "threads/worker"

let count = 0;

let subject = new Subject()

const counter = {
  finish() {
    subject.complete()
    subject = new Subject()
  },
  increment() {
    count += 1;
    subject.next({ count });
  },
  decrement() {
    count -= 1;
    subject.next({ count });
  },
  values() {
    return Observable.from(subject)
  }
}

expose(counter)