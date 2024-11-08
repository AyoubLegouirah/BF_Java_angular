import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { FormsModule } from '@angular/forms';
import { TempPipe } from './pipes/temp.pipe';
import { ConverTimePipe } from './pipes/conver-time.pipe';

@NgModule({
  declarations: [
    ToFahrenheitPipe,
    TempPipe,
    ConverTimePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ToFahrenheitPipe,
    TempPipe,
    ConverTimePipe,
    ]
})
export class SharedModule { }