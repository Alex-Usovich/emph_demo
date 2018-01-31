import {  Injectable  }       from '@angular/core';
import {  Dispatcher, Store } from './store';
import {  rootReducer }       from './root.reducer';

@Injectable()
export class StoreService {
  private __store: Store;

  constructor() {
    const preMiddleware = obs => obs.do(val => {
      console.log('ACTION', val);
    });

    const postMiddleware = obs => obs.do(val => {
      console.log('STATE', val);
    });

    this.__store = new Store(
      new Dispatcher(),
      rootReducer,
      preMiddleware,
      postMiddleware,
      { __appState : 'INITIATED' }
    );
  }

  public get store() {
    return this.__store;
  }
}
