import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  load_quiz={
    id:'',
    title:'',
    no_of_question:'',
    max_marks:'',
    description:''
  }
  constructor(private _rou:ActivatedRoute,private _quizserv:QuizService,private route:Router) { }
  quiz_id=0;
  ngOnInit(): void {
    this.quiz_id=this._rou.snapshot.params.quiz_id;
    this.load_quiz_by_id(this.quiz_id);
  }

  load_quiz_by_id(id:any){
    this._quizserv.get_single_quiz(id).subscribe((dat:any)=>{
      this.load_quiz=dat;
    },(err:any)=>{

    });
  }
  
  start_exam(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to start your exam",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Start it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Congress!',
          'Exam Started....',
          'success'
        )
        this.route.navigate([`/start-exam/${this.load_quiz.id}`]);
      }
      else{
        Swal.fire(
          'Ok',
          'Please Shedule your exam asap...',
          'warning'
        );
        this.route.navigate(['norm-dash/']);
      }
    }) 
  }

}
