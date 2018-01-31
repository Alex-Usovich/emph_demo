import { NgModule }                 from '@angular/core';
import { NoteComponent }            from './note.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

@NgModule({
  imports: [ BrowserAnimationsModule ],
  declarations  : [ NoteComponent ],
  exports       : [ NoteComponent ]
})
export class NoteModule {}
