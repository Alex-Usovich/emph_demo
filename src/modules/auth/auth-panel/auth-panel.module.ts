import { NgModule }           from '@angular/core';
import { AuthPanelComponent } from './auth-panel.component';
import { SignOutModule }      from '../sign-out/sign-out.module';
import { RouterModule }       from '@angular/router';
import { SharedModule }       from '../../shared/shared.module';

@NgModule({
  imports       : [ SharedModule, RouterModule, SignOutModule ],
  declarations  : [ AuthPanelComponent ],
  exports       : [ AuthPanelComponent ]
})
export class AuthPanelModule {}
