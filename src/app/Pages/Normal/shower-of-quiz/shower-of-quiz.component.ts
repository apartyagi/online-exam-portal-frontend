import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-shower-of-quiz',
  templateUrl: './shower-of-quiz.component.html',
  styleUrls: ['./shower-of-quiz.component.css']
})
export class ShowerOfQuizComponent implements OnInit {

  quiz=[
    {
      id:'',
      title:'',
      description:'',
      max_marks:'',
      no_of_question:'',
      category:{
        id:'',
        title:''
      }
    }
  ];
  constructor(private _quizSer:QuizService,private _rou:ActivatedRoute) { }
  id=0;
  ngOnInit(): void {
    this._rou.params.subscribe((param)=>{
      this.id=param.id;
      this.get_active_quiz(this.id);
    })
  }

  get_all_quiz(){
    this._quizSer.get_all_quiz().subscribe((data:any)=>{
      this.quiz=data;
    },(err:any)=>{

    });
  }

    get_quiz_by_id(id:any){
      this._quizSer.get_quiz_by_category(id).subscribe((data:any)=>{
        this.quiz=data; 
      },(err:any)=>{
  
      });
    }
    get_active_quiz(id:any){
      this._quizSer.get_all_active_quiz_with_category(id).subscribe((data:any)=>{
        this.quiz=data; 
      },(err:any)=>{
  
      });
    }
}