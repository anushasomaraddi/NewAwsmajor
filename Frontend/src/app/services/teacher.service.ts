import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private quizid: any;
  private quesid: any;
  private delete: any;
  public avail: boolean = false;
  public msg: string = '';
  private baseUri: string = 'http://localhost:3000/teacher/';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) {}

  createQuiz(body: any) {
    return this.http.post(this.baseUri + 'createquiz', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  getuploadquiz() {
    return this.http.get(this.baseUri + 'getuploadquiz', {
      headers: this.headers,
    });
  }

  gethomequiz() {
    return this.http.get(this.baseUri + 'gethomequiz', {
      headers: this.headers,
    });
  }

  seestudent() {
    return this.http.get(this.baseUri + 'seestudent', {
      headers: this.headers,
    });
  }

  blockuser(id) {
    return this.http.delete(this.baseUri + 'blockuser/' + id, {
      headers: this.headers,
    });
  }
  unblockuser(id) {
    return this.http.delete(this.baseUri + 'unblockuser/' + id, {
      headers: this.headers,
    });
  }

  setQuizId(id) {
    this.quizid = id;
  }

  getQuizId() {
    return this.quizid;
  }

  deletequiz(id) {
    return this.http.delete(this.baseUri + 'deletequiz/' + id, {
      headers: this.headers,
    });
  }

  uploadquiz(body) {
    return this.http.post(
      this.baseUri + 'uploadquiz',
      { id: body },
      {
        observe: 'body',
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
      }
    );
  }
  addQuestion(body) {
    return this.http.post(this.baseUri + 'addquestion', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  getAllQuestion(id) {
    return this.http.get(this.baseUri + 'getallquestion/' + id, {
      headers: this.headers,
    });
  }

  deleteQuestion(id) {
    return this.http.delete(this.baseUri + 'deletequestion/' + id, {
      headers: this.headers,
    });
  }

  setDelete(data) {
    this.delete = data;
  }

  getDelete() {
    return this.delete;
  }

  //Cta
  createCTA(body: any) {
    return this.http.post(this.baseUri + 'createcta', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
  getuploadques() {
    return this.http.get(this.baseUri + 'getuploadques', {
      headers: this.headers,
    });
  }

  gethomeques() {
    return this.http.get(this.baseUri + 'gethomeques', {
      headers: this.headers,
    });
  }

  seestudentcta() {
    return this.http.get(this.baseUri + 'seestudentcta', {
      headers: this.headers,
    });
  }

  blockuserques(id) {
    return this.http.delete(this.baseUri + 'blockuserques/' + id, {
      headers: this.headers,
    });
  }
  unblockuserques(id) {
    return this.http.delete(this.baseUri + 'unblockuserques/' + id, {
      headers: this.headers,
    });
  }

  setQuesId(id) {
    this.quesid = id;
  }

  getQuesId() {
    return this.quesid;
  }

  deleteques(id) {
    return this.http.delete(this.baseUri + 'deleteques/' + id, {
      headers: this.headers,
    });
  }

  uploadques(body) {
    return this.http.post(
      this.baseUri + 'uploadques',
      { id: body },
      {
        observe: 'body',
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
      }
    );
  }
  addQuestioncta(body) {
    return this.http.post(this.baseUri + 'addquestioncta', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  getAllQuestioncta(id) {
    return this.http.get(this.baseUri + 'getallquestioncta/' + id, {
      headers: this.headers,
    });
  }

  deleteQuestioncta(id) {
    return this.http.delete(this.baseUri + 'deletequestioncta/' + id, {
      headers: this.headers,
    });
  }

  setDeleteQues(data) {
    this.delete = data;
  }

  getDeleteQues() {
    return this.delete;
  }
}
