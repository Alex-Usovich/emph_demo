import { NgModule }           from '@angular/core';
import { DarkenedComponent }  from './darkened.component';
import { SharedModule }       from '../../shared/shared.module';

@NgModule({
  imports       : [ SharedModule ],
  declarations  : [ DarkenedComponent ],
  exports       : [ DarkenedComponent ]
})
export class DarkenedModule {}
