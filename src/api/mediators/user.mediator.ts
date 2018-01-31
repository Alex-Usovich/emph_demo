import { Injectable }       from '@angular/core';
import { StoreService }     from '../redux/store.service';
import { ACTIONS }          from '../redux/actions/actions';
import { AuthService }      from '../services/auth.service';
import { Observable }       from 'rxjs/Observable';
import * as firebase        from 'firebase';

/**
 * Service that works as mediator between components and business logic: Store, FireBase
 */
@Injectable()
export class UserMediator {

  /**
   * @param {AuthService} authService
   * @param {StoreService} storeService
   */
  constructor(
    private authService:  AuthService,
    private storeService: StoreService
  ) {}

  /**
   * Get state of authentication data of current user
   *
   * @returns {Observable<firebase.User>}
   */
  public getAuthState(): Observable<firebase.User | null> {
    return this.authService.getAuthState();
  }

  /**
   * Retrieve data for authenticated user from Store
   *
   * @returns {any} !should be changed to Model
   */
  public getUser(): any {
    return this.storeService.store.retrieveParticular('user');
  }

  /**
   * Check if use is signed in
   *
   * @returns {Observable<boolean[]> | Observable<any>}
   */
  public isSignedIn() {
    return Observable.combineLatest(this.authService.isSignedIn(), this.getUser(), (aRes, bRes: any) => {
      return  aRes && bRes && bRes.email;
    });
  }

  /**
   * Manage data after user requested signUp
   *
   * @param payload { { email: string, password: string } }
   *
   * @returns {Observable<any>}
   */
  public signUp(payload): Observable<any> {
    return Observable
      .fromPromise(this.authService.signUp(payload)
        .then((success) => {
          this.storeService.store.dispatch({
            type    : ACTIONS.USER_ACTIONS.USER_HAS_LOGGED_IN,
            payload : {
              email : payload.email,
              uid   : success.uid
            }
          });

          return success;
        }, (failure) => {
          return failure;
        }));
  }

  /**
   * Manage data after user signed in
   *
   * @param payload
   *
   * @returns {Observable<any>}
   */
  public signIn(payload): Observable<any> {
    return Observable
      .fromPromise(this.authService.signIn(payload)
        .then((success) => {
          this.storeService.store.dispatch({
            type    : ACTIONS.USER_ACTIONS.USER_HAS_LOGGED_IN,
            payload : {
              email : payload.email,
              uid   : success.uid
            }
          });

          return success;
        }, (failure) => {
          return failure;
        }));
  }

  /**
   * Manage data after user signed out
   *
   * @returns {Observable<any>}
   */
  public signOut(): Observable<any> {
    return Observable.fromPromise(this.authService.signOut()
      .then((success) => {
        this.storeService.store.dispatch({
          type  : ACTIONS.USER_ACTIONS.USER_HAS_LOGGED_OUT
        });

        return success;
      }, (failure) => {
        return failure;
      }));
  }
}
