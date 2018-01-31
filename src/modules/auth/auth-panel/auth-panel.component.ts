import { Component, OnInit } from '@angular/core';
import { UserMediator }      from '../../../api/mediators/user.mediator';

/**
 * Auth Panel
 */
@Component({
  selector    : 'ew-auth-panel',
  templateUrl : './auth-panel.component.html',
  styleUrls   : [ './auth-panel.component.css' ]
})
export class AuthPanelComponent implements OnInit {

  private authState$;

  /**
   * @param {UserMediator} userMediator
   */
  constructor(
    private userMediator: UserMediator
  ) {}

  /**
   * @inheritDoc
   */
  public ngOnInit() {
    this.authState$ = this.userMediator.isSignedIn();
  }
}
