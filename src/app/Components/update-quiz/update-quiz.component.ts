import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent implements OnInit {
  quiz = {
    id: '',
    title: '',
    description: '',
    max_marks: '',
    no_of_question: '',
    active: '',
    category: {
      id: '',
      title: '',
    },
  };
  catergory = [
    {
      title: '',
      id: '',
    },
  ];
  constructor(
    private _quSer: QuizService,
    private _catSer:CategoryService,
    private router: Router,
    private _snackbar: MatSnackBar,
    private rou: ActivatedRoute
  ) {}
  idq = 0;
  ngOnInit(): void {
    this.idq = this.rou.snapshot.params.idq;
    this.load_data_of_particular_quiz(this.idq);
    this.get_all_category();
  }

  load_data_of_particular_quiz(id:any){
    this._quSer.get_single_quiz(id).subscribe((data:any)=>{
      this.quiz=data;     
    },(error:any)=>{});
  } 

  get_all_category(){
    this._catSer.get_all_category().subscribe((data:any)=>{
        this.catergory=data;
    })
  }


  upd_quiz(){
    this._quSer.update_quiz(this.quiz).subscribe((data:any)=>{
      Swal.fire("Success..","Quiz Update Succesfully","success");
    },
    (err:any)=>{
      Swal.fire("Error!.","Faliure occur","error");
    });
  }
  
}
