import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
})
export class HelloPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  start() {
    this.router.navigate(['/training']);
  }
}
