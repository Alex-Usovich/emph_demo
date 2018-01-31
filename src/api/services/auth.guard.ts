import { Injectable }           from '@angular/core';
import { ActivatedRouteSnapshot,
  CanActivate, Router,
  RouterStateSnapshot }         from '@angular/router';
import { UserMediator }         from '../mediators/user.mediator';
import { Observable }           from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  /**
   * @param {Router} router
   * @param {UserMediator} userMediator
   */
  constructor(
    private router        : Router,
    private userMediator  : UserMediator
  ) {}

  /**
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   *
   * @returns {Observable<any>}
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userMediator.isSignedIn()
      .switchMap((val) => {
        if (!val && state.url !== '/sign-in') {
          this.router.navigateByUrl('/sign-in');

          return Observable.of(false);
        }

        return Observable.of(true);
      });
  }
}
