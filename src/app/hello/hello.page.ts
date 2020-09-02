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

  step = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  make() {
    if (this.step === 3) {
      this.step = 0;
    } else {
      this.step += 1;
    }
  }

  start() {
    this.router.navigate(['/training']);
  }
}
