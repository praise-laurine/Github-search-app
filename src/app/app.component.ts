import { Component } from '@angular/core';
import { GithubReposService } from './github-repos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-serach';

  constructor(private repoService : GithubReposService){}
}
