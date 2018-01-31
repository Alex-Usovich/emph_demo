import {
  Component,
  OnDestroy,
  OnInit  }               from '@angular/core';
import {  NotesMediator } from '../../../api/mediators/notes.mediator';
import {  Subscription  } from 'rxjs/Subscription';

/**
 * List of notes
 */
@Component({
  selector    : 'ew-notes-note-list',
  templateUrl : './note-list.component.html',
  styleUrls   : [ './note-list.component.css' ]
})
export class NoteListComponent implements OnInit, OnDestroy {

  public  notesInnerState: any;
  public  notes$;

  private notesInnerState$: Subscription;

  /**
   * @param {NotesMediator} notesMediator
   */
  constructor(
    private notesMediator: NotesMediator
  ) {}

  /**
   * @inheritDoc
   */
  public ngOnInit() {
    this.notes$           = this.notesMediator.getNotes();
    this.notesInnerState$ = this.notesMediator.getNotesInnerState()
      .subscribe((val) => {
        this.notesInnerState = val;
      });
  }

  /**
   * @inheritDoc
   */
  public ngOnDestroy() {
    if (this.notesInnerState$) {
      this.notesInnerState$.unsubscribe();
    }
  }

  /**
   * Handle an event to open a note
   *
   * @param $event
   */
  public openNote($event) {
    this.notesMediator.openNote( {
      noteId  : $event
    });
  }

  /**
   * Handle an event to close a note
   *
   * @param $event
   */
  public closeNote($event) {
    this.notesMediator.closeNote();
  }

  /**
   * Handle an event to delete a note
   *
   * @param $event
   */
  public deleteNote($event) {
    this.notesMediator.deleteNote({
      noteId  : $event
    });
  }

}
