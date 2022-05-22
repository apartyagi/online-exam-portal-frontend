import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {server_url} from './helper/help_url'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public get_all_category(){
    return this.http.get(`${server_url}/cat/all`);
  }

  public update_category(cat:any){
    return this.http.put(`${server_url}/cat/upd`,cat);
  }
  public add_category(cat:any){
    return this.http.post(`${server_url}/cat/add`,cat);
  }
  public delete_cat(id:any){
    return this.http.delete(`${server_url}/cat/del/${id}`);
  }
  public get_single_cat(id:any){
    return this.http.get(`${server_url}/cat/get/${id}`);
  }
  

}
