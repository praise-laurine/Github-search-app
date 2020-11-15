import { Injectable } from '@angular/core';
// import { from } from 'rxjs';
import { User } from './user';
import { Repos } from './repository'

import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment.prod";
;
@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  searchUser: User;
  allRepos: Repos;
 
  constructor(private http:HttpClient) { 
    this.searchUser = new User("","","",0,0,0,"",new Date);
    this.allRepos = new Repos("","","",new Date,"");
  }
  

  getUsername(userName: string) {
   
    interface Responce {
      url:string,
      login: string;
      html_url:string;
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    return new Promise((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/'+userName+'?access_token='+environment.apiKey).toPromise().then(
        (result) => {
          this.searchUser = result;
          console.log(this.searchUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
   });
  
  }

  getgithubpublicREpos(userName){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      language:string;
      created_at:Date;
    }

    return new Promise((resolve,reject)=>{
      const username = 'praise-laurine'
      this.http.get<Repos>('https://api.github.com/users/'+userName+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(

        (results) => {
          this.allRepos = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      )
    });

    }
   

  
}
