import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from "../app/repository/repository.component";


const routes: Routes = [
  { path: 'repository', component: RepositoryComponent},
  { path: '', redirectTo:"/repository", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
