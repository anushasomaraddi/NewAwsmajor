import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-studentctahome',
  templateUrl: './studentctahome.component.html',
  styleUrls: ['./studentctahome.component.css'],
})
export class StudentctahomeComponent implements OnInit {
  ctadescriptions: any;
  public loading: any = true;
  public empty: any = true;
  constructor(
    private studentService: StudentService,
    private router: Router,
    private webSocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.empty = true;
    this.webSocketService.listen('quescrud').subscribe((data) => {
      console.log('Anusha here before getData()');
      this.getdata();
    });
    console.log('Anusha here after getData() socket');

    this.getdata();
  }

  getdata() {
    this.studentService.getAllQues().subscribe(
      (data) => {
        console.log(data);
        if (data['cta']) {
          this.loading = false;
          this.ctadescriptions = data['cta'];
          //console.log(this.ctadescriptions.length);
          if (!this.ctadescriptions.length) {
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

  playquiz(item) {
    this.studentService.setQuesId(item._id);
    this.router.navigate(['/student/playcta']);
  }
}
