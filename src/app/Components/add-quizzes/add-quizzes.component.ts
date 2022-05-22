import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/Services/category.service';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizzes',
  templateUrl: './add-quizzes.component.html',
  styleUrls: ['./add-quizzes.component.css']
})
export class AddQuizzesComponent implements OnInit {

  quiz={
    title:'',
    description:'',
    max_marks:'',
    no_of_question:'',
    active:'',
    category:{
      id:''
    }
  } 
  catergory=[
    {
      title:'top',
      id:''
    }
  ];

  constructor(private _quizServ:QuizService,private _snackBar: MatSnackBar,private _cat:CategoryService) { }

  ngOnInit(): void {
    this.load_cat_for_quiz();
  }
  load_cat_for_quiz(){
      this._cat.get_all_category().subscribe((data:any)=>{
        this.catergory=data;
      },(error)=>{
        console.log("error in load category"+error);
      });
  }

  add_quizz(){
    if(this.quiz.title=='' || this.quiz.description=='' || this.quiz.max_marks=='' || this.quiz.no_of_question=='' || this.quiz.active=='' ||this.quiz.category.id==''){
      this._snackBar.open("Please fill all field correctly","*");
    }
    else{
      this._quizServ.add_quiz(this.quiz).subscribe((data)=>{
        Swal.fire("Success..","Quizz Added Succesfully","success");
        this.quiz={
          title:'',
          description:'',
          max_marks:'',
          no_of_question:'',
          active:'',
          category:{
            id:''
          }
        }
      },(error)=>{
        Swal.fire("Error!!","Something Wents Wrong please try Again.....","error");
      });
    }
  }

}
