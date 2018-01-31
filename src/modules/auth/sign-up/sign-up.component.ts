import { Component, OnDestroy,
  OnInit  }                   from '@angular/core';
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
  selector    : 'ew-auth-sign-up',
  templateUrl : './sign-up.component.html',
  styleUrls   : [ './sign-up.component.css' ]
})
export class SignUpComponent implements OnInit, OnDestroy {

  public authState  : Observable<firebase.User | null>;
  public signedUp   : Subscription;
  public signUpForm : FormGroup;

  /**
   * @param {Router} router
   * @param {UserMediator} userMediator
   */
  constructor(
    private router        : Router,
    private userMediator  : UserMediator
  ) {
    this.signUpForm = new FormGroup({
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
    if (this.signedUp) {
      this.signedUp.unsubscribe();
    }
  }

  /**
   * Perform sign up
   */
  public signUp() {
    if (this.signUpForm.valid) {
      this.signedUp = this.userMediator
        .signUp({
          email     : this.signUpForm.controls['email'].value,
          password  : this.signUpForm.controls['password'].value
        }).subscribe(() => {
          this.router.navigateByUrl('/dashboard');
        }, () => {});
    }
  }
}
