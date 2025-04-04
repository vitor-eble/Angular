import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErrorComponent } from './campo-control-error/campo-control-error.component';
import { DropdownService } from './services/dropdown.service';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErrorComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormDebugComponent,
    CampoControlErrorComponent
  ],
  providers: [
    DropdownService,
    provideHttpClient()
  ]
})
export class SharedModule { }
