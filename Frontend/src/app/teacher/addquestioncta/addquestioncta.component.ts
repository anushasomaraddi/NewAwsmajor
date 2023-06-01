import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
@Component({
  selector: 'app-addquestioncta',
  templateUrl: './addquestioncta.component.html',
  styleUrls: ['./addquestioncta.component.css'],
})
export class AddquestionctaComponent implements OnInit {
  msg: any = [];
  avail: boolean;
  quesid: any;
  obj: any;
  options: any[] = [];
  constructor(private teacherService: TeacherService, private router: Router) {}

  ngOnInit(): void {
    if (this.teacherService.getQuesId() == undefined) {
      this.router.navigate(['/teacher/ctaupload']);
    } else {
      this.quesid = this.teacherService.getQuesId();
    }
  }

  addQuestioncta(f: NgForm) {
    // console.log(this.options);
    this.obj = {
      quesid: this.quesid,
      questionText: f.controls.questionText.value,
    };
    // console.log(this.obj);
    this.teacherService.addQuestioncta(this.obj).subscribe(
      (data) => {
        // console.log(data);
        this.router.navigate(['/teacher/ctaupload']);
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }
}
