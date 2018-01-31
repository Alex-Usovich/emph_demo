import { Component, OnDestroy } from '@angular/core';
import { UserMediator }         from '../../../api/mediators/user.mediator';
import { Subscription }         from 'rxjs/Subscription';
import { Router }               from '@angular/router';

@Component({
  selector    : 'ew-auth-sign-out',
  templateUrl : './sign-out.component.html',
  styleUrls   : [ './sign-out.component.css' ]
})
export class SignOutComponent implements OnDestroy {

  public signedOut$: Subscription;

  /**
   * @param {Router} router
   * @param {UserMediator} userMediator
   */
  constructor(
    private router: Router,
    private userMediator: UserMediator
  ) {}

  /**
   * @inheritDoc
   */
  public ngOnDestroy() {
    if (this.signedOut$) {
      this.signedOut$.unsubscribe();
    }
  }

  /**
   * Perform sign out
   */
  public signOut() {
    this.signedOut$ = this.userMediator
      .signOut()
      .subscribe(() => {
        this.router.navigateByUrl('/sign-in')
      }, () => {});
  }
}
