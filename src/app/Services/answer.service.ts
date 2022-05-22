import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {server_answer_url} from './helper/help_url';
@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http:HttpClient) { }

  public add_answer(data:any){
      return this.http.post(`${server_answer_url}/add-answer`,data);
  }

  public fetch_all_quiz(id:any){
    return this.http.get(`${server_answer_url}/get-quiz/${id}`);
  }
}
