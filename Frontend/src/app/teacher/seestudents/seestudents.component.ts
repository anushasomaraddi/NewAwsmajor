import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-seestudents',
  templateUrl: './seestudents.component.html',
  styleUrls: ['./seestudents.component.css'],
})
export class SeestudentsComponent implements OnInit {
  msg: any = [];
  public users: any[];
  avail: boolean;
  empty: boolean;
  public loading: any = true;
  totalQuestion: any;
  score: any = 0;
  SeestudentsComponent: any;
  constructor(private teacherService: TeacherService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.empty = false;
    this.getdata();

    // this.score = this.playquiz.score;
    // this.totalQuestion = this.playquiz.totalQuestion;
  }

  getdata() {
    this.teacherService.seestudent().subscribe(
      (data) => {
        if (data['user']) {
          this.users = data['user'];
          this.loading = false;
          if (!this.users.length) {
            this.empty = true;
          } else {
            this.empty = false;
          }
        }
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }

  block(user) {
    var userid = user._id;
    this.teacherService.blockuser(userid).subscribe(
      (data) => {
        // console.log(data);
        // this.adminService.avail = true;
        // this.adminService.msg = "Successfully Blocked User!!!";
        // this.router.navigate(['/admin']);
        this.getdata();
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }

  unblock(user) {
    var userid = user._id;
    this.teacherService.unblockuser(userid).subscribe(
      (data) => {
        this.getdata();
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }
}
