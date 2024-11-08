import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { FormsModule } from '@angular/forms';
import { DemosRoutingModule } from './demo-routing.module';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { SharedModule } from '../shared/shared.module';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';


@NgModule({
  declarations: [
    DemoBindingsComponent,
    DemoPipesComponent,
    DemoDirectivesComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    SharedModule,
  ]
})
export class DemosModule { }