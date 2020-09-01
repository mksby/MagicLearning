import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, IonCard } from '@ionic/angular';

import words1 from './words1.js';
import words2 from './words2.js';
import words3 from './words3.js';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {
  @ViewChild('card') card: ElementRef;

  started = false;
  showHelp = false;
  words = words1.concat(words2).concat(words3).sort(() => 0.5 - Math.random()).slice(0, 50).map(word => ({
    word,
    step: 0
  }));
  round = 0;
  wordsCount = this.words.length;

  slides = [
    {slog: 'Ва', name: 'варежки', src: 'https://lh3.googleusercontent.com/proxy/7k9DuYcypupl0guBWqY_WRRzI0KwtO5ZGHzZ0bzTfPNSfOtk5UCbKtlVpzY9rMCkW4ci0bMEEphXMV_qcKmtHO5ovLpn79r8C6YhKhu_8sjo0KLWjfitV2IbW1gGGK2MBwB4na71oV76MwLpgdyRVhIBmJNpy61ook5byDU'},
    {slog: 'Пе', name: 'персик', src: 'https://cdn.segodnya.ua/i/image_650x434/media/image/5d3/f52/7a1/5d3f527a1bc69.jpg'},
    {slog: 'Са', name: 'садовник', src: 'https://lh3.googleusercontent.com/proxy/zYHdK8r85kmEu-Qn9ST-EKjlMCAq7xgBB8TBGIhiT5zqBrE3gmq0xJkH2d6l15GOsqKD7wNEXVn0UGMAwLdc4_1vT5R-0yMmNFmTsVHytosSyxIW89ouKUCDWHyXiLARgKkYXe1dl7vQmj4CiaI7XkkjK-RtmTRqaKPNpA'},
    {slog: 'Ру', name: 'русалка', src: 'https://s.mediasole.ru/images/573/573307/1.jpg'},
    {slog: 'Ти', name: 'титаник', src: 'https://radiokp.ru/sites/default/files/styles/fiksirovannyy_razmer_1280x853/public/2019-08/titanik_0_0.jpg?itok=uAQQTFeq'}
  ]

  slideIndex = 0;
  wordIndex = 0;
  showEnd = false;
  colors = ['#dc3545', '#ffc107', '#28a745'];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  make() {
    this.words[this.wordIndex].step += 1;

    if (this.words[this.wordIndex].step === 3) {
      setTimeout(() => {
        this.words.splice(this.wordIndex, 1);
        if (this.words[this.wordIndex]) {
          this.words[this.wordIndex].step = 0;
        }

        this.showEnd = this.words.length <= 10 && this.round >= 3;

        if (!this.words[this.wordIndex]) {
          if (this.words[0]) {
            this.wordIndex = 0;
          } else {
            this.router.navigate(['learning']);
          }
        }
      }, 300);
    }
  }

  finish() {
    this.router.navigate(['learning']);
  }

  start() {
    this.started = true;
  }

  help() {
    this.showHelp = true;
  }

  next() {
    this.wordIndex += 1;
    if (this.wordIndex > this.words.length - 1) {
      this.wordIndex = 0;
      this.round += 1;
    }

    this.showEnd = this.words.length <= 10 && this.round >= 3;
    // if (this.slideIndex < this.slides.length - 1) {
    //   this.showHelp = false;
    //   this.slideIndex += 1;
    // } else {
    //   this.router.navigate(['learning']);
    // }
  }
}
