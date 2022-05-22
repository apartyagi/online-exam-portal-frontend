import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  Question=[
    {
      id:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      answer:'',
      content:"",
      quizz:{
        id:'',
        no_of_question:'',
        max_marks:'',
        title:'',
        category:{
          title:''
        }
      }
    }
  ]
  
  quid=0;
  constructor(private _questionSer:QuestionService,private _rou:ActivatedRoute) { }

  ngOnInit(): void {
    this.quid=this._rou.snapshot.params.quid;
    this.get_question_acc_to_quiz(this.quid);
    
  }
  get_question_acc_to_quiz(id:any){
    this._questionSer.get_question_by_quiz(id).subscribe((data:any)=>{
      this.Question=data;  
      console.log(data);
    },(err:any)=>{
        
    });
  }
  
  dele_question(id:any){
    alert(id);
  }

}
