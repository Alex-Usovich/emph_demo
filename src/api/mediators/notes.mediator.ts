import { Injectable }           from '@angular/core';
import { AngularFireDatabase }  from 'angularfire2/database';
import { Observable }           from 'rxjs/Observable';
import { StoreService }         from '../redux/store.service';
import { AuthService }          from '../services/auth.service';
import { ACTIONS }              from '../redux/actions/actions';
/**
 * Service that works as mediator between components and business logic: Store, FireBase
 */
@Injectable()
export class NotesMediator {

  /**
   * @param {AngularFireDatabase} db
   * @param {AuthService}         authService
   * @param {StoreService}        storeService
   */
  constructor(
    private db            : AngularFireDatabase,
    private authService   : AuthService,
    private storeService  : StoreService
  ) {}

  /**
   * @param payload
   *
   * @returns {Observable<boolean>}
   */
  addNote(payload: any) {
    return this.storeService.store.retrieveParticular('user')
     .switchMap((userData) => {
        const itemsRef = this.db.list('/notes/'+ userData.uid);

        itemsRef.push({
          textContents  : payload.textContents
        });

        return Observable.of(true);
      });
  }

  /**
   * Open note to view it as whole
   *
   * @param payload
   *
   * @returns {any}
   */
  openNote(payload: any) {
    this.storeService.store.dispatch({
      type  : ACTIONS.DARKENED_ACTIONS.DARKENED_LAYOUT_ON
    });

    return this.storeService.store.dispatch({
      type  : ACTIONS.NOTES_ACTIONS.TOGGLE_NOTE,
      payload : {
        noteId  : payload.noteId
      }
    });
  }

  /**
   * Close a note
   *
   * @param payload
   *
   * @returns {any}
   */
  closeNote() {
    this.storeService.store.dispatch({
      type  : ACTIONS.DARKENED_ACTIONS.DARKENED_LAYOUT_OFF
    });

    return this.storeService.store.dispatch({
      type  : ACTIONS.NOTES_ACTIONS.TOGGLE_NOTE,
      payload : {
        noteId  : undefined
      }
    });
  }

  /**
   * Delete note
   *
   * @param payload
   *
   * @returns {Promise<void>}
   */
  deleteNote(payload: any) {
    return this.db.object('/notes/' + this.authService.getCurrentUserId() + '/' + payload.noteId).remove();
  }

  /**
   * Get the list of notes
   *
   * !! offline and online versions should be implemented
   *
   * @returns {Observable<any[]>}
   */
  public getNotes() {
    return this.db.list('/notes/' + this.authService.getCurrentUserId()).snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key : c.payload.key,
          ...c.payload.val()
        }));
      });
  }

  /**
   * Get inner state of 'notes' related components
   *
   * @returns {Observable<any>}
   */
  public getNotesInnerState() {
    return this.storeService.store.retrieveParticular('notes');
  }
}
