import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AssessmentDialogComponent } from './assessment-dialog/assessment-dialog.component'


@NgModule({
  declarations: [
    AsideComponent,
    AssessmentDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    AsideComponent
  ]
})
export class SharedModule { }
