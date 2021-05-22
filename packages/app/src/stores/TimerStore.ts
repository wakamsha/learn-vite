import { action, makeObservable, observable } from 'mobx';

export class TimerStore {
  public secondsPassed = 0;

  constructor() {
    makeObservable(this, {
      secondsPassed: observable,
      increaseTimer: action,
    });
  }

  public increaseTimer() {
    this.secondsPassed += 1;
  }
}
