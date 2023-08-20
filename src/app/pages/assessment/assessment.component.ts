import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssessmentDialogComponent } from 'src/app/shared/assessment-dialog/assessment-dialog.component';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent {

  activeTabIndex: number = 1;
  constructor(public dialog: MatDialog) { }

  isHidden: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateVisibility();
  }
  private updateVisibility() {
    this.isHidden = window.innerWidth <= 768;
  }

  ngOnInit() {
    this.updateVisibility();
  }

  toggleDiv() {
    this.isHidden = !this.isHidden;
  }

  openDialog() {
    this.dialog.open(AssessmentDialogComponent, {
      width: '520px',
    });
  }

}
