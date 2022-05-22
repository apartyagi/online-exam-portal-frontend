import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  total_marks_paper = 0;

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

  submit_exam() {
    this._questserv.submit_result(this.question_load).subscribe(
      (dat: any) => {
        this.total_ques = dat.total_question;
        this.atteptanswe = dat.attempted_question;
        this.per_question_n = dat.per_question_marks;
        this.correctanswe = dat.correct_answer;
        this.wronganswe = dat.wrong_answer;
        this.total_marks_paper = dat.total_marks;
        this.result = dat.result;
        this.submit_res = true;

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
        this._questserv.add_answer(answer_submit).subscribe((data:any)=>{
              console.log(answer_submit);
        },(err:any)=>{
          console.log(err);
        })
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
}
