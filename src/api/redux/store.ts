import * as Rx from 'rxjs/Rx';
import 'rxjs/operator/scan';
import 'rxjs/operator/let';

export interface Action {
  type      : any;
  payload?  : any;
}

export interface Reducer<T> {
  (state: T, action: Action);
}

export class Dispatcher extends Rx.Subject<any> {
  dispatch(value: any) {
    this.next(value);
  }
}

export class Store extends Rx.BehaviorSubject<any> {
  constructor(
    private dispatcher  : Dispatcher,
    private reducer     : Reducer<any>,
    preMiddleware,
    postMiddleware,
    public initialState : any = {}
  ) {
    super(initialState);
    this.dispatcher
      .let(preMiddleware)
      .scan((state, action) => this.reducer(state, action), initialState)
      .let(postMiddleware)
      .subscribe(state => super.next(state));
  }

  retrieveCurrent() {
    return this.map(state => state).distinctUntilChanged();
  }

  retrieveParticular(key: string) {
    return this.map(state => state[key]).distinctUntilChanged();
  }

  retrieveParticularLatest(key: string) {
    return this.map(state => state[key]);
  }

  retrieveFromCombined(combinedKey: string, key: string) {
    return this.map((state) => {
      return state[combinedKey] && state[combinedKey][key]
        ? state[combinedKey][key]
        : state[combinedKey];

      // check if works
      // return state[combinedKey] && state[combinedKey][key] || state[combinedKey];
    }).distinctUntilChanged();
  }

  retrieveByKeySearch(key: string) {
    return this.map((state) => {
      return Object.keys(state)
        .reduce((previousValue: any[], currentKey: string) => {
          const found = Object.keys(state[currentKey])
            .filter((subKey) => {
              return subKey === key;
            });

          return found && found[0] && state[currentKey][found[0]]
            ? previousValue.concat(state[currentKey][found[0]])
            : previousValue;
        }, [])
    }).distinctUntilChanged();
  }

  dispatch(value: any) {
    this.dispatcher.dispatch(value);
  }

  next(value: any) {
    this.dispatcher.dispatch(value);
  }
}
