import {  NgModule  }   from '@angular/core';
import {  FormsModule,
  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EwPropValues } from '../../api/pipes/ew-prop-values';

@NgModule({
  imports       : [ CommonModule, FormsModule, ReactiveFormsModule ],
  declarations  : [ EwPropValues ],
  exports       : [ CommonModule, FormsModule, ReactiveFormsModule, EwPropValues ]
})
export class SharedModule {}
