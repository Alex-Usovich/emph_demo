import { NgModule }           from '@angular/core';
import { NoteListModule }     from './note-list/note-list.module';
import { NoteListComponent }  from './note-list/note-list.component';

@NgModule({
  imports: [ NoteListModule ],
  exports: [ NoteListComponent ]
})
export class NotesModule {}
