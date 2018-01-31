import { AngularFireAuth }  from 'angularfire2/auth';
import { Injectable }       from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import * as firebase        from 'firebase';

/**
 * Service to manage authentication for the app
 */
@Injectable()
export class AuthService {

  /**
   * @param {AngularFireAuth} afAuth
   */
  constructor(private afAuth: AngularFireAuth) {}

  /**
   * Get authentication state for the app
   *
   * @returns {Observable<firebase.User>}
   */
  public getAuthState(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }

  /**
   * Get uid of currently authorized user
   *
   * @returns {string}
   */
  public getCurrentUserId() {
    return this.afAuth.auth.currentUser.uid;
  }

  /**
   * Check if user is signed in (db)
   *
   * @returns {Observable<boolean>}
   */
  public isSignedIn() {
    return this.afAuth.authState.switchMap((val) => {
      const isSignedIn = val ? true : false;

      return Observable.of(isSignedIn);
    });
  }

  /**
   * Sign up user into application
   *
   * @param payload { { email: string, password: string} }
   *
   * @returns {Promise<any>}
   */
  public signUp(payload): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(payload.email, payload.password);
  }

  /**
   * Sign in user into application
   *
   * @param payload { { email: string, password: string } }
   *
   * @returns {Promise<any>}
   */
  public signIn(payload): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(payload.email, payload.password);
  }

  /**
   * Sign out user from application
   *
   * @returns {Promise<any>}
   */
  public signOut(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
}
