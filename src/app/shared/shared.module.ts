import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TempPipe } from './pipes/temp.pipe';
import { ConverTimePipe } from './pipes/conver-time.pipe';
import { FormErrorComponent } from './components/form-error/form-error.component';

@NgModule({
  declarations: [
    ToFahrenheitPipe,
    TempPipe,
    ConverTimePipe,
    FormErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ToFahrenheitPipe,
    TempPipe,
    ConverTimePipe,
    FormErrorComponent
    ]
})
export class SharedModule { }
