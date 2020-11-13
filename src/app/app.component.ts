import { Component } from '@angular/core';
import { GithubReposService } from './github-repos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-serach';

  githubUserRepos: any =[];
  constructor(private repoService : GithubReposService){}

  getRepos(){
  this.repoService. getgithubpublicREpos().subscribe(myRepos =>{
    this.githubUserRepos = myRepos;

  })
}
}
