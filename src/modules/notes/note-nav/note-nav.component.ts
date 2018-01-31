import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup,
  Validators }                  from '@angular/forms';
import { Subscription }         from 'rxjs/Subscription';
import { PopupsMediator }       from '../../../api/mediators/popups.mediator';

@Component({
  selector    : 'ew-notes-note-nav',
  templateUrl : './note-nav.component.html',
  styleUrls   : [ './note-nav.component.css' ]
})
export class NoteNavComponent implements OnDestroy {

  public noteForm : FormGroup;

  private note$   : Subscription;

  /**
   * @param {PopupsMediator}  popupsMediator
   */
  constructor(
    private popupsMediator  : PopupsMediator
  ) {
    this.noteForm = new FormGroup({
      textContents  : new FormControl('', Validators.required)
    });
  }

  /**
   * @inheritDoc
   */
  public ngOnDestroy() {
    if(this.note$) {
      this.note$.unsubscribe();
    }
  }

  /**
   * Show darkened layout if user pressed to add a note
   */
  public createNote() {
    this.popupsMediator.createNoteOn();
  }
}
