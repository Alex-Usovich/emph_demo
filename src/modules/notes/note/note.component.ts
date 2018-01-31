import {  Component, EventEmitter,
  Input, Output  }                from '@angular/core';
import {  animate, state, style,
  transition, trigger }           from '@angular/animations';

/**
 * Single note
 */
@Component({
  selector    : 'ew-notes-note',
  templateUrl : './note.component.html',
  styleUrls   : [ './note.component.css' ],
  animations: [
    trigger('myAwesomeAnimation', [
      state(false.toString(), style({
        transform : 'scale(1)',
      })),
      state(true.toString(), style({
        border    : '1px solid black',
        position  : 'relative',
        zIndex    : 999,
        transform : 'scale(1.9)',
      })),
      transition('false => true', animate('100ms ease-in')),
    ]),
  ]
})
export class NoteComponent {

  @Input() public item             : any;
  @Input() public notesInnerState$ : any;

  @Output() public deleteNote$  : EventEmitter<string> = new EventEmitter<string>();
  @Output() public openNote$    : EventEmitter<string> = new EventEmitter<string>();
  @Output() public closeNote$    : EventEmitter<string> = new EventEmitter<string>();

  public state: boolean = false;

  constructor() {}

  public deleteNote($event, noteId: string) {
    $event.stopPropagation();
    this.deleteNote$.emit(noteId);
  }

  public openNote(noteId: string) {
    if (!this.notesInnerState$.isOpened) {
      this.openNote$.emit(noteId);
    }
  }

  public closeNote($event, noteId: string) {
    $event.stopPropagation();
    this.closeNote$.emit(noteId);
  }
}
