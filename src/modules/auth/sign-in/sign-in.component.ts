import { Component, OnDestroy,
  OnInit}                     from '@angular/core';
import { FormControl,
  FormGroup, Validators  }    from '@angular/forms';
import { UserMediator }       from '../../../api/mediators/user.mediator';
import { Observable }         from 'rxjs/Observable';
import * as firebase          from 'firebase';
import { Subscription }       from 'rxjs/Subscription';
import { Router }             from '@angular/router';
/**
 * SignUp
 */
@Component({
  selector    : 'ew-auth-sign-in',
  templateUrl : './sign-in.component.html',
  styleUrls   : [ './sign-in.component.css' ]
})
export class SignInComponent implements OnInit, OnDestroy {

  public authState  : Observable<firebase.User | null>;
  public signedIn   : Subscription;
  public signInForm : FormGroup;

  /**
   * @param {Router} router
   * @param {UserMediator} userMediator
   */
  constructor(
    private router        : Router,
    private userMediator  : UserMediator
  ) {
    this.signInForm = new FormGroup({
      email     : new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password  : new FormControl('', Validators.required)
    });
  }

  /**
   * @inheritDoc
   */
  public ngOnInit() {
    this.authState = this.userMediator.getAuthState();
  }

  /**
   * @inheritDoc
   */
  public ngOnDestroy() {
    if (this.signedIn) {
      this.signedIn.unsubscribe();
    }
  }

  /**
   * Sign in into application
   */
  public signIn() {
    if (this.signInForm.valid) {
      this.signedIn = this.userMediator
        .signIn({
          email     : this.signInForm.controls['email'].value,
          password  : this.signInForm.controls['password'].value
        })
        .subscribe(() => {
          this.router.navigateByUrl('/dashboard');
        }, () => {});
    }
  }
}
