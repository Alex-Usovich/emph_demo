import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard }          from '../../api/services/auth.guard';
import { NoteListComponent }  from '../notes/note-list/note-list.component';

@NgModule({
  imports : [ RouterModule.forChild([
    { path  : 'dashboard', redirectTo: 'notes', pathMatch: 'full' },
    { path  : '', component: DashboardComponent,
      children  : [
        { path  : 'notes', component: NoteListComponent, canActivate: [AuthGuard] }
      ],
      canActivate : [AuthGuard]
    }
  ])],
  exports : [ RouterModule ]
})
export class DashboardRoutingModule {}
