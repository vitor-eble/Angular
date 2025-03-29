import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormControl, FormsModule } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { CampoControlErrorComponent } from '../campo-control-error/campo-control-error.component';



@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControlErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateFormModule { }
