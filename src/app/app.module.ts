import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { RepositoryComponent } from "../app/repository/repository.component";
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { GithubReposService } from './github-repos.service';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { GithubReposService } from './github-repos.service';
import { DateCountPipe } from './date-count.pipe';
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';


@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    NavbarComponent,
    SearchFormComponent,
    // NotFoundComponent,
    DateCountPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule
    
  ],
  providers: [GithubReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
