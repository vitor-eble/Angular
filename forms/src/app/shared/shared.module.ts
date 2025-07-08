import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErrorComponent } from './campo-control-error/campo-control-error.component';
import { DropdownService } from './services/dropdown.service';
import { provideHttpClient } from '@angular/common/http';
import { ErrorMsgComponent } from './error-msg/error-msg.component';


@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErrorComponent,
    ErrorMsgComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormDebugComponent,
    CampoControlErrorComponent,
    ErrorMsgComponent
  ],
  providers: [
    DropdownService,
    provideHttpClient()
  ]
})
export class SharedModule { }
