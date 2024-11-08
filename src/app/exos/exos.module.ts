import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { ExosComponent } from './exos.component';
import { TimerComponent } from './timer/timer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TimerComponent,
    ExosComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    SharedModule,
  ]
})
export class ExosModule { }