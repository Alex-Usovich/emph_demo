import { NgModule }             from '@angular/core';
import { SignInComponent }      from './sign-in.component';
import { SharedModule }         from '../../shared/shared.module';
import { SignInRoutingModule }  from './sign-in.routing.module';

@NgModule({
  imports       : [ SharedModule, SignInRoutingModule ],
  declarations  : [ SignInComponent ],
  exports       : [ SignInComponent ]
})
export class SignInModule{}
