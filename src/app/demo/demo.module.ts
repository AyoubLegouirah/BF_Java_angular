import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { DemosRoutingModule } from './demo-routing.module';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { SharedModule } from '../shared/shared.module';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoInputOutputComponent } from './demo-input-outpout/demo-input-outpout.component';
import { DeleteDialogComponent } from './demo-input-outpout/delete-dialog/delete-dialog.component';
import { DemoFormulaireComponent } from './demo-formulaire/demo-formulaire.component';
import { DemoContactComponent } from './demo-contact/demo-contact.component';


@NgModule({
  declarations: [
    DemoBindingsComponent,
    DemoPipesComponent,
    DemoDirectivesComponent,
    DeleteDialogComponent,
    DemoInputOutputComponent,
    DemoFormulaireComponent,
    DemoContactComponent,
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    SharedModule,
  ]
})
export class DemosModule { }
