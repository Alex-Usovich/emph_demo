import { NgModule }               from '@angular/core';
import { NoteFormPopupComponent } from './note-form-popup.component';
import { SharedModule }           from '../../shared/shared.module';

@NgModule({
  imports       : [ SharedModule ],
  declarations  : [ NoteFormPopupComponent ],
  exports       : [ NoteFormPopupComponent ]
})
export class NoteFormPopupModule {}
