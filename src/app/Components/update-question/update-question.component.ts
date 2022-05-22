import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  
  upd_question={
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    type:'',
    content:'',
    quizz:{
      id:''
    }

  }


  constructor(private _quesSer:QuestionService,private _rou:ActivatedRoute) { }


  que_id=0;
  ngOnInit(): void {
    this.que_id=this._rou.snapshot.params.que_id;
    this.load_question_data(this.que_id);
  }

  upd_ques(){
    this._quesSer.update_question(this.upd_question).subscribe((data:any)=>{
      Swal.fire("Sucess!..","Question Update Sucessfully","success"),(error:any)=>{
          Swal.fire("Error!..","Error Occur ","error");
      }
    });
  }

  load_question_data(id:any){
      this._quesSer.get_single_question(id).subscribe((data:any)=>{
        this.upd_question=data;
      });
  }



}
