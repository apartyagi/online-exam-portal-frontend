import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {server_url} from '../Services/helper/help_url';
import { Injectable } from '@angular/core';
import {token} from '../Services/helper/help_url';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private user_login:HttpClient) { }

      public fetchUserDetails(){
        return this.user_login.get(`${server_url}/current-user`);
      }
      public generate_token(logindata:any){
        return this.user_login.post(`${token}/generate-token`,logindata);
      }
      public savetoken(token_value:string){
        localStorage.setItem("token",token_value);
        return true;
      }
      public isloggedIn(){
        let tokenstr=localStorage.getItem("token");
          if(tokenstr==undefined || tokenstr=="" || tokenstr==null){
            return false;
          }
          else{
            return true
          }
      }
      public logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href='login';
        return true;
      }
      public get_token_from_localstorage(){
        return localStorage.getItem('token');
      }
      public setUser(user:any){
        localStorage.setItem("user",JSON.stringify(user));
      }

      public getUser(){
        let data=localStorage.getItem("user");
        if(data!=null){
          return JSON.parse(data);  
        }
        else{
          this.logout();
          return null;
        }
      }

     public check_role(){
      let user=this.getUser();
      return user.authorities[0].authority;
    } 
      
    
}
