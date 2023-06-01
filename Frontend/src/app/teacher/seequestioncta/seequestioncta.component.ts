import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeacherService } from 'src/app/services/teacher.service';
@Component({
  selector: 'app-seequestioncta',
  templateUrl: './seequestioncta.component.html',
  styleUrls: ['./seequestioncta.component.css'],
})
export class SeequestionctaComponent implements OnInit {
  quesid: any;
  allQuestions: any;

  load: any;
  del: any;
  empty: any = true;
  // authSubscription: Subscription;
  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.load = true;
    this.empty = true;
    if (this.teacherService.getQuesId() == undefined) {
      this.router.navigate(['/teacher/teacherhome']);
    } else {
      if (this.teacherService.getDeleteQues() == undefined) {
        this.router.navigate(['/teacher/teacherhome']);
      } else {
        this.del = this.teacherService.getDeleteQues();
        this.quesid = this.teacherService.getQuesId();
        // console.log(this.del);
        this.getAllQuestions(this.quesid);
      }
    }
    // this.authSubscription = this.route.queryParams.subscribe(
    //   (params: Params) => {
    //     console.log("heyy");
    //     console.log(params);
    //   });
  }

  delete(one) {
    this.teacherService.deleteQuestioncta(one._id).subscribe(
      (data) => {
        // console.log(data);
        this.getAllQuestions(this.quesid);
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }

  getAllQuestions(quesid) {
    // console.log("hahaha");
    // console.log(quizid);

    this.teacherService.getAllQuestioncta(quesid).subscribe(
      (data) => {
        if (data['msg']) {
          this.allQuestions = data['msg'];
          this.load = false;

          if (!this.allQuestions.length) {
            this.empty = true;
          } else {
            this.empty = false;
          }
        }
        // this.one =  this.allQuestions[0]

        // console.log(this.allQuestions);
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }
}
