import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { PlayquizComponent } from 'src/app/student/playquiz/playquiz.component';
@Component({
  selector: 'app-seescores',
  templateUrl: './seescores.component.html',
  styleUrls: ['./seescores.component.css'],
})
export class SeescoresComponent implements OnInit {
  public users: any[];
  public score: any[];
  public loading: any = true;
  empty: boolean;
  totalQuestion: any;
  finalsubmit: boolean;
  constructor(
    private router: Router,
    private playquiz: PlayquizComponent,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {}

   getsdata(){
    if(this.playquiz.finalsubmit){
      this.score = this.playquiz.score;
      
    }
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
}
