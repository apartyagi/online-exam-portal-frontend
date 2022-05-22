import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {server_question_url} from './helper/help_url';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public get_all_question(){
    return this.http.get(`${server_question_url}/all`);
  }
  public get_single_question(id:any){
    return this.http.get(`${server_question_url}/get/${id}`);
  }
  public update_question(ques:any){
    return this.http.put(`${server_question_url}/upd`,ques);
  }
  public delete_question(id:any){
    return this.http.delete(`${server_question_url}/del/${id}`);

  }
  public add_question(ques:any){
    return this.http.post(`${server_question_url}/add`,ques);
  }
  public get_question_by_quiz(id:any){
      return this.http.get(`${server_question_url}/quiz/ques/${id}`);
  }
  public submit_result(ques:any){
    return this.http.post(`${server_question_url}/eval-res`,ques);
  }
  public add_answer(answe:any){
    return this.http.post(`${server_question_url}/add-answer`,answe);
  }
}
