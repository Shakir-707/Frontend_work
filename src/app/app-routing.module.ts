import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AssessmentComponent } from './pages/assessment/assessment.component';

const routes: Routes = [
  // { path: 'pages/assessment', component: AssessmentComponent }
  {path:'',redirectTo:'/pages/assessment',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
