import { Component, OnInit }  from '@angular/core';
import { UserMediator }       from '../api/mediators/user.mediator';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.css']
})
export class AppComponent implements OnInit {

  public user;

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
    this.user = this.userMediator.getUser();
  }
}
