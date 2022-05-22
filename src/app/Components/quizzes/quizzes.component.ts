import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quiz=[
    {
      id:'',
      title:'',
      description:'',
      max_marks:'',
      no_of_question:'',
      active:'',
      category:{
        title:''
      }
    }
  ]
  constructor(private _quizSer:QuizService,private router:Router) { }

  ngOnInit(): void {
    
    this._quizSer.get_all_quiz().subscribe((data:any)=>{
      this.quiz=data;
    },(error:any)=>{
      console.log(error,"Error");
    });
    
  }

  edit(id:any){
    this.router.navigate([`adam-dash/upd-qui/${id}`]);
  }
  del(id:any){
    this._quizSer.delete_quiz(id).subscribe((data:any)=>{
      Swal.fire("Success..","Quizz Delete Succesfully","success");
    },(err:any)=>{
      Swal.fire("Success..","Faliue occur but delte ho gyi","error");
    });
  }


  watch_questions(id:any){
    
  }
}
