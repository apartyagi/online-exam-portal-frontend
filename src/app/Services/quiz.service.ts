import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {server_quiz_url} from './helper/help_url'
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public get_all_quiz(){
    return this.http.get(`${server_quiz_url}/all`);
  }

  public get_single_quiz(id:any){
    return this.http.get(`${server_quiz_url}/get/${id}`);
  }
  public update_quiz(quiz:any){
      return this.http.put(`${server_quiz_url}/upd`,quiz);
  }
  public delete_quiz(id:any){
    return this.http.delete(`${server_quiz_url}/del/${id}`);
  }
  public add_quiz(quiz:any){
    return this.http.post(`${server_quiz_url}/add`,quiz);
  }

  public get_quiz_by_category(id:any){
    return this.http.get(`${server_quiz_url}/cat/${id}`);
  }
  public get_all_active_quiz_with_category(id:any){
    return this.http.get(`${server_quiz_url}/cat/act/${id}`)
  }

}
