import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form } from '@angular/forms';
import { ExosRoutingModule } from './exos-routing.module';
import { ExosComponent } from './exos.component';
import { TimerComponent } from './timer/timer.component';
import { SharedModule } from '../shared/shared.module';


import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SubShoppingListComponent } from './shopping-list/sub-shopping-list/sub-shopping-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    TimerComponent,
    ExosComponent,
    ShoppingListComponent,
    SubShoppingListComponent,
    ContactFormComponent,

  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    SharedModule,
  ]
})
export class ExosModule { }
