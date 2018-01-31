import { Injectable }   from '@angular/core';
import { StoreService } from '../redux/store.service';
import { ACTIONS }      from '../redux/actions/actions';
/**
 * PopupsMediator
 */
@Injectable()
export class PopupsMediator {

  /**
   * @param {StoreService} storeService
   */
  constructor(
    private storeService: StoreService
  ) {}

  /**
   * Get state of application's popups
   *
   * @returns {Observable<any>}
   */
  getPopups() {
    return this.storeService.store.retrieveParticular('popups');
  }

  /**
   * Open popup "Create a Note"
   */
  createNoteOn() {
    this.storeService.store.dispatch({
      type : ACTIONS.DARKENED_ACTIONS.DARKENED_LAYOUT_ON
    });

    this.storeService.store.dispatch({
      type : ACTIONS.POPUPS_ACTIONS.POPUP_CREATE_NOTE_ON
    });
  }

  /**
   * Close popup "Create a Note"
   */
  createNoteOff() {
    this.storeService.store.dispatch({
      type  : ACTIONS.DARKENED_ACTIONS.DARKENED_LAYOUT_OFF
    });

    this.storeService.store.dispatch({
      type : ACTIONS.POPUPS_ACTIONS.POPUP_CREATE_NOTE_OFF
    });
  }
}
