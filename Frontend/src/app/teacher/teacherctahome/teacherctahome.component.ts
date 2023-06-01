import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacherctahome',
  templateUrl: './teacherctahome.component.html',
  styleUrls: ['./teacherctahome.component.css'],
})
export class TeacherctahomeComponent implements OnInit {
  msg: any = [];
  empty: boolean;
  avail: boolean;
  public ctadescriptions: any[];
  public loading: any = true;
  constructor(private teacherService: TeacherService, private router: Router) {}
  ngOnInit(): void {
    this.loading = true;
    this.empty = false;
    this.getdata();
  }

  getdata() {
    this.teacherService.gethomeques().subscribe(
      (data) => {
        if (data['ques']) {
          this.ctadescriptions = data['ques'];
          this.loading = false;
          // console.log(this.quiz.length);
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

  viewQuestion(q) {
    this.teacherService.setQuesId(q._id);
    this.teacherService.setDelete(q.upload);
    this.router.navigate(['/teacher/seequestioncta']);
  }

  delete(ques) {
    this.teacherService.deleteques(ques._id).subscribe(
      (data) => {
        // console.log(data);
        this.getdata();
        // this.router.navigate(['/teacher/teacherhome']);
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }
}
