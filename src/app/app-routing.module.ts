import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatListComponent } from './stat-list/stat-list.component';
 
const routes: Routes = [
  { path: 'stats', component: StatListComponent },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }