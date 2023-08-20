import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssessmentComponent } from 'src/app/pages/assessment/assessment.component';

@Component({
  selector: 'app-assessment-dialog',
  templateUrl: './assessment-dialog.component.html',
  styleUrls: ['./assessment-dialog.component.css']
})
export class AssessmentDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AssessmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  close() {
    this.dialogRef.close();
  }

}
