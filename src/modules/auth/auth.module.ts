import { NgModule }         from '@angular/core';
import { SignUpModule }     from './sign-up/sign-up.module';
import { SignInModule }     from './sign-in/sign-in.module';
import { SignOutModule }    from './sign-out/sign-out.module';
import { AuthPanelModule }  from './auth-panel/auth-panel.module';

@NgModule({
  imports: [ SignUpModule, SignInModule, SignOutModule, AuthPanelModule ]
})
export class AuthModule {}
