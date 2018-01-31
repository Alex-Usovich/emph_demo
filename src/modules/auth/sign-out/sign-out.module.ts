import { NgModule }         from '@angular/core';
import { SignOutComponent } from './sign-out.component';
import { SharedModule }     from '../../shared/shared.module';

@NgModule({
  imports       : [ SharedModule ],
  declarations  : [ SignOutComponent ],
  exports       : [ SignOutComponent ]
})
export class SignOutModule {}
