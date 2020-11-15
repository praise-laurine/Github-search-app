import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { RepositoryComponent } from "../app/repository/repository.component";
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { GithubReposService } from './github-repos.service';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { GithubReposService } from './github-repos.service';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    UsersComponent,
    NavbarComponent,
    SearchFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
