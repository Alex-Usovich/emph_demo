import {  Component, OnInit } from '@angular/core';
import {  StoreService}       from '../../../api/redux/store.service';
import {  ACTIONS }           from '../../../api/redux/actions/actions';

@Component({
  selector    : 'ew-layout-darkened',
  templateUrl : './darkened.component.html',
  styleUrls   : [ './darkened.component.css' ]
})
export class DarkenedComponent implements OnInit {

  public layout$;

  /**
   * @param {StoreService} storeService
   */
  constructor(
    private storeService: StoreService
  ) {}

  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.layout$ = this.storeService.store.retrieveParticular('layout');
  }


  /**
   * Toggle visibility of darkened layout
   */
  toggle() {
    this.storeService.store.dispatch({
      type  : ACTIONS.DARKENED_ACTIONS.DARKENED_LAYOUT_TOGGLE
    });
    this.storeService.store.dispatch({
      type  : ACTIONS.NOTES_ACTIONS.NOTE_OFF
    });
    this.storeService.store.dispatch({
      type : ACTIONS.POPUPS_ACTIONS.POPUP_CREATE_NOTE_OFF
    })
  }
}
