import { NgModule }         from '@angular/core';
import { NoteNavComponent } from './note-nav.component';
import { SharedModule }     from '../../shared/shared.module';

@NgModule({
  imports       : [ SharedModule ],
  declarations  : [ NoteNavComponent ],
  exports       : [ NoteNavComponent ]
})
export class NoteNavModule {}
