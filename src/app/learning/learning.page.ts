import { Component, OnInit, ViewChild } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { IonContent } from '@ionic/angular';

// import lang from './spanish.js';
import lang from './italian.js';

// var words = '';

// var r = words.split(':').map(i => i.split(',').map(i => i.trim()));

// r.forEach((step, index, array) => {
//     array[index + 1] && array[index + 1].unshift(step.pop());
// })

// console.log(r);

// var i,j,temparray = [],chunk = 10;
// for (i=0,j=r.length; i<j; i+=chunk) {
//     temparray.push(r.slice(i,i+chunk).map(i => ({
//         "russian": i[0],
//         "foreign": i[1],
//         "speak": i[2]
//         })));
// }

@Component({
  selector: 'app-learning',
  templateUrl: './learning.page.html',
  styleUrls: ['./learning.page.scss'],
})
export class LearningPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  words = lang;
  setIndex = 0;
  slideIndex = 0;
  timer;
  step = 0;
  help = false;

  constructor() { }

  ngOnInit() {
    this.timer = startTimer(60 * 8, document.querySelector('#time'), () => {
      clearInterval(this.timer);
      alert('Время закончилось.. Но вы можете продолжать');
    });
  }

  setHelp() {
    this.help = true;
  }

  next() {
    setTimeout(() => this.content.scrollToTop(0));
    this.help = false;

    if (this.slideIndex < this.words[this.setIndex].length - 1) {
      this.slideIndex += 1;
    } else {
      this.slideIndex = 0;

      if (this.step < 3) {
        this.step += 1;
      } else {
        this.step = 0;
        this.setIndex += 1;
        clearInterval(this.timer);
        this.timer = startTimer(60 * 8, document.querySelector('#time'), () => {
          clearInterval(this.timer);
        });
      }
    }
  }
}

function startTimer(duration, display, endcallback) {
  var timer = duration, minutes, seconds;
  return setInterval(function () {
      minutes = parseInt(String(timer / 60), 10);
      seconds = Math.max(parseInt(String(timer % 60), 10), 0);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (timer < 0) {
        endcallback();
      } else {
        timer--;
      }
  }, 1000);
}
