import { Injectable } from '@angular/core';
// import { from } from 'rxjs';
import { Users } from './users';
import { Repos } from './repository'

import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  searchUser: Users;
  allRepos: Repos;
 
  constructor(private http:HttpClient) { 
    this.searchUser = new Users("","","","",0,0,0,new Date);
    this.allRepos = new Repos("","","",new Date);
  }
  

  repoSearch(userName: string) {

    interface Responce{
      name:string,
       login:string,
       avatar_url:string,
       bio:string,
       public_repos:number,
       followers:number,
       following: number,
       created_at: Date
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
      
      name:string,
      description:string,
      language:string,
      created_at:Date

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




















