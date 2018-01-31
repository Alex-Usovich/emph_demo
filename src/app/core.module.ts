import { NgModule }               from '@angular/core';
import { StoreService }           from '../api/redux/store.service';
import { AuthService }            from '../api/services/auth.service';
import { AngularFireModule }      from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule }  from 'angularfire2/auth';
import { AuthModule }             from '../modules/auth/auth.module';
import { environment }            from '../environments/environment';
import { SignOutModule }          from '../modules/auth/sign-out/sign-out.module';
import { AuthPanelModule }        from '../modules/auth/auth-panel/auth-panel.module';
import { DashboardModule }        from '../modules/dashboard/dashboard.module';
import { AuthGuard }                  from '../api/services/auth.guard';
import { AngularFireDatabaseModule }  from 'angularfire2/database';
import { UserMediator }               from '../api/mediators/user.mediator';
import { NotesMediator }              from '../api/mediators/notes.mediator';
import { NotesModule }                from '../modules/notes/notes.module';
import { DarkenedModule }             from '../modules/layouts/darkened/darkened.module';
import { PopupsMediator }             from '../api/mediators/popups.mediator';

@NgModule({
  providers : [ StoreService, AuthService, AuthGuard, UserMediator,  NotesMediator, PopupsMediator ],
  imports : [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AuthModule,
    DashboardModule,
    NotesModule,
    DarkenedModule
  ],
  exports : [ SignOutModule, AuthPanelModule, DashboardModule, DarkenedModule ]
})
export class CoreModule {}
