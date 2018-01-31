import { NgModule }             from '@angular/core';
import { NoteListComponent }    from './note-list.component';
import { NoteModule }           from '../note/note.module';
import { NoteNavModule }        from '../note-nav/note-nav.module';
import { SharedModule }         from '../../shared/shared.module';
import { NoteFormPopupModule }  from '../note-form-popup/note-form-popup.module';

@NgModule({
  imports       : [ SharedModule, NoteModule, NoteNavModule, NoteFormPopupModule ],
  declarations  : [ NoteListComponent ],
  exports       : [ NoteListComponent ]
})
export class NoteListModule {}
