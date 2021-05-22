import { makeObservable, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import { getUsers } from '../api/client';

export class UserStore {
  public static Context = createContext<UserStore | null>(null);

  public users: string[] = [];

  constructor() {
    makeObservable(this, {
      users: observable,
    });
  }

  public async fetchUsers() {
    const res = await getUsers();

    runInAction(() => {
      this.users = (res as any).map((item: any) => item.name);
    });
  }
}
