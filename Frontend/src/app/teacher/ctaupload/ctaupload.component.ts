import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-ctaupload',
  templateUrl: './ctaupload.component.html',
  styleUrls: ['./ctaupload.component.css'],
})
export class CtauploadComponent implements OnInit {
  msg: any = [];
  avail: boolean;
  public ctadescriptions: any[];
  empty: boolean;
  public loading: any = true;

  constructor(private teacherService: TeacherService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.empty = false;
    this.getdata();
  }

  getdata() {
    this.teacherService.getuploadques().subscribe(
      (data) => {
        if (data['ques']) {
          this.loading = false;
          this.ctadescriptions = data['ques'];
          if (!this.ctadescriptions.length) {
            this.empty = true;
          } else {
            this.empty = false;
          }
        }
        // console.log(data);
        // this.router.navigate(['/teacher/teacherhome']);
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }

  add(ques) {
    this.teacherService.setQuesId(ques._id);
    this.router.navigate(['/teacher/addquestioncta']);
  }

  upload(ques) {
    // console.log("upload");
    // console.log(quiz);
    // console.log(quiz._id);
    this.teacherService.uploadques(ques._id).subscribe(
      (data) => {
        // this.quiz = data['quiz']
        // console.log(data);
        if (data['msg']) {
          this.msg = data['msg'];
          this.avail = true;
          return;
        }
        if (data['message']) {
          this.router.navigate(['/teacher/teacherhome']);
        } else {
          this.msg = 'something went wrong!!';
          this.avail = true;
          return;
        }
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }

  delete(ques) {
    this.teacherService.deleteques(ques._id).subscribe(
      (data) => {
        // console.log(data);
        this.router.navigate(['/teacher/teacherhome']);
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }
  viewQuestion(ques) {
    this.teacherService.setQuesId(ques._id);
    this.teacherService.setDeleteQues(ques.upload);
    this.router.navigate(['/teacher/seequestioncta']);
  }
}
