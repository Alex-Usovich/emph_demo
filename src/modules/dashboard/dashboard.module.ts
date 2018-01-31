import { NgModule }               from '@angular/core';
import { DashboardComponent }     from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { SharedModule }           from '../shared/shared.module';
import { FeaturesBarModule }      from '../features-bar/features-bar.module';

@NgModule({
  imports       : [ SharedModule, FeaturesBarModule, DashboardRoutingModule ],
  declarations  : [ DashboardComponent ],
  exports       : [ DashboardComponent ]
})
export class DashboardModule {}
