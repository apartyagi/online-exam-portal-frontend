import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_url from '../Services/helper/help_url';
@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private _user_service:HttpClient) { }

    create_user_data_post(user:any){
       return this._user_service.post(`${base_url}/add`,user);
    }

}
