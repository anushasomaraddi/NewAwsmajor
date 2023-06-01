import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.css'],
})
export class CompilerComponent implements OnInit {
  // url: string =
  //   'https://www.jdoodle.com/api/redirect-to-post/c-online-compiler';
  router: any;
  constructor() {}

  ngOnInit(): void {}

  // jdoodle(): void {
  //   this.router.navigateByUrl(this.url);
  // }
}
