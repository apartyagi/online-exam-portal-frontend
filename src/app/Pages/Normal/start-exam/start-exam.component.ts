import { LocationStrategy } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { QuestionService } from 'src/app/Services/question.service';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css'],
})
export class StartExamComponent implements OnInit {
  current_user_details = {
    id: '',
  };
  totalanswe = 0;
  atteptanswe = 0;
  wronganswe = 0;
  result = 0;
  correctanswe = 0;
  per_question_n = 0;
  total_ques = 0;
  submit_res = false;
  timer = 0;
  quiz_id = 0;
  total_marks = 0;

  question_load = [
    {
      answer: '',
      content: '',
      id: '',
      image: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      given_answer: '',
      quizz: {
        id: '',
        title: '',
        max_marks: '',
        no_of_question: '',
      },
    },
  ];

  constructor(
    private _questserv: QuestionService,
    private _rou: ActivatedRoute,
    private _logser: LoginService
  ) {}

  ngOnInit(): void {
    this.quiz_id = this._rou.snapshot.params.id;
    this.load_all_question(this.quiz_id);
    this.get_current_user();
  }

  load_all_question(id: any) {
    this._questserv.get_question_by_quiz(id).subscribe(
      (dat: any) => {
        this.question_load = dat;
        this.timer = this.question_load.length * 2 * 60;
        this.startTimer();
      },
      (err: any) => {}
    );
  }

  submitresulttoserver(){
    let answer_submit = {
      marks_get: '',
      marks_obtained: '',
      result: '',
      quizdata: {
        id:''+this.quiz_id,
      },
      userdata: {
        id:''+this.current_user_details.id,
      },
    };
      answer_submit.marks_get=''+this.result;
      answer_submit.marks_obtained=''+this.total_marks;

    this._questserv.add_answer(answer_submit).subscribe((data:any)=>{
      console.log(answer_submit);
  },(err:any)=>{
  console.log(err);
  })
  }

  submit_exam() {
    this._questserv.submit_result(this.question_load).subscribe(
      (dat: any) => {
        this.total_ques = dat.total_question;  //5
        this.atteptanswe = dat.attempted_question;  //5
        this.per_question_n = dat.per_question_marks; //100
        this.correctanswe = dat.correct_answer;  //5
        this.wronganswe = dat.wrong_answer;  //0
        this.total_marks = dat.total_marks;  //500
        this.result = dat.result; //500
        this.submit_res = true;
        this.submitresulttoserver();
      },
      (err: any) => {
        console.log('err');
      }
    );
  }

  get_current_user() {
    this._logser.fetchUserDetails().subscribe(
      (dat: any) => {
        this.current_user_details = dat;
        console.log(dat);
      },
      (err: any) => {
        this._logser.logout();
      }
    );
  }

  startTimer() {
    //this.timeLeft=this.convert_time_toSec(this.time);
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        this.submit_exam();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000);
  }
  get_formatted_Time() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} min :${ss} sec`;
  }
  
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    alert("All data will be loss when you refresh the page")
    // Do more processing...
    event.returnValue = false;
}  
}
