import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup,
  Validators }                  from '@angular/forms';
import { NotesMediator  }       from '../../../api/mediators/notes.mediator';
import { Subscription }         from 'rxjs/Subscription';
import {PopupsMediator} from '../../../api/mediators/popups.mediator';

/**
 * Popup form to add a note
 */
@Component({
  selector    : 'ew-notes-note-form-popup',
  templateUrl : './note-form-popup.component.html',
  styleUrls   : [ './note-form-popup.component.css' ]
})
export class NoteFormPopupComponent implements OnInit, OnDestroy {

  public noteForm : FormGroup;
  private note$   : Subscription;
  private popups$;

  /**
   * @param {NotesMediator} notesMediator
   * @param {PopupsMediator} popupsMediator
   */
  constructor(
    private notesMediator   : NotesMediator,
    private popupsMediator  : PopupsMediator
  ) {
    this.noteForm = new FormGroup({
      textContents  : new FormControl('', Validators.required)
    });
  }

  /**
   * @inheritDoc
   */
  public ngOnInit() {
    this.popups$ = this.popupsMediator.getPopups();
  }

  /**
   * @inheritDoc
   */
  public ngOnDestroy() {
    if (this.note$) {
      this.note$.unsubscribe();
    }
  }

  /**
   * Add a note
   */
  public add() {
    if (this.noteForm.valid) {
      const payload = { textContents: this.noteForm.controls['textContents'].value };

      if (this.note$) {
        this.note$.unsubscribe();
      }

      this.note$ = this.notesMediator.addNote(payload).subscribe();
      this.noteForm.reset();
      this.close();
    }
  }

  public close() {
    this.popupsMediator.createNoteOff();
  }
}
