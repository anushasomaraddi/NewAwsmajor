import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
@Component({
  selector: 'app-ctacreate',
  templateUrl: './ctacreate.component.html',
  styleUrls: ['./ctacreate.component.css'],
})
export class CtacreateComponent implements OnInit {
  constructor(private teacherService: TeacherService, private router: Router) {}
  msg: any = [];
  avail: boolean;
  ngOnInit(): void {}

  createCta(f: NgForm) {
    this.teacherService.createCTA(JSON.stringify(f.value)).subscribe(
      (data) => {
        if (data['msg']) {
          this.msg = data['msg'];
          this.avail = true;
          return;
        }
        this.router.navigate(['/teacher/ctaupload']);
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }
}
