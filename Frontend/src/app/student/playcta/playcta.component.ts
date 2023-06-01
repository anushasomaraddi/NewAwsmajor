import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-playcta',
  templateUrl: './playcta.component.html',
  styleUrls: ['./playcta.component.css'],
})
export class PlayctaComponent implements OnInit {
  quizid: any;
  allQuestions: any;
  solutionArray: any[] = [];
  ansOfOneQuestion: any[] = [];
  ansKey: any[] = [];
  time: any = 10;
  timePerQuestion: any;
  interval: any;
  temp: any;
  score: any = 0;
  flageLast: any = false;
  totalQuestion: any;
  questionCounter: any = 1;
  finishflag: any = false;
  finalsubmit: boolean = false;
  emails: any;
  // submitAvail:any = true;
  oneQuestion: any;
  load: any;
  myurl: any;
  quesid: any;
  constructor(
    private studentService: StudentService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.toggleFullScreen(document.body)
    this.load = true;
    if (this.studentService.getQuesId() == undefined) {
      this.router.navigate(['/student/studentctahome']);
    } else {
      this.quesid = this.studentService.getQuesId();
      this.getAllQuestions(this.quesid);
      this.myurl = this.router.url;
      // console.log(this.myurl);

      //     window.addEventListener('blur', (event) => {
      //       if (this.myurl === '/student/playcta' && this.finalsubmit == false) {
      //         this.block();
      //       }
      //     });

      //     window.addEventListener('resize', (event) => {
      //       if (this.myurl === '/student/playcta' && this.finalsubmit == false) {
      //         this.block();
      //       }
      //     });
    }
  }

  getAllQuestions(quesid) {
    this.studentService.getAllQuestioncta(quesid).subscribe(
      (data) => {
        if (data['msg']) {
          this.load = false;
          this.allQuestions = data['msg'];

          this.totalQuestion = this.allQuestions.length;
          this.oneQuestion = this.allQuestions[0];
        }

        // console.log(this.allQuestions);
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }

  // block() {
  //   this.studentService.block().subscribe(
  //     (data) => {
  //       // console.log(data);
  //       if (data['message']) {
  //         this.authService.logoutUser();
  //         this.router.navigate(['/cheat']);
  //       }
  //     },
  //     (error) => {
  //       this.router.navigate(['/error']);
  //     }
  //   );
  // }

  playquiz(item) {
    this.studentService.setQuesId(item._id);
    this.router.navigate([
      'https://www.jdoodle.com/api/redirect-to-post/c-online-compiler',
    ]);
  }
}
