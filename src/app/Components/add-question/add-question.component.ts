import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  add_question={
    option1:'',
    option2:'',
    option3:'',
    option4:'hello',
    answer:'',
    type:'',
    content:'',
    quizz:{
      id:''
    }

  }

  constructor(private _quesSer:QuestionService,private _route:ActivatedRoute) { }
    id=0;
  ngOnInit(): void {
      
    this.id=this._route.snapshot.params.quiz_id;
  }
  add_ques(){
    let quiz_id:string=this.id.toString();
    this.add_question.quizz.id=quiz_id;
    this._quesSer.add_question(this.add_question).subscribe((data:any)=>{
      Swal.fire("Success !.","Question Addes Succesfully","success");
    },(error:any)=>{
      Swal.fire("Error !.","Cant add Question to Quiz","error");
    });
  }

}
