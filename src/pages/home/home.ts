import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MagicBallProvider } from '../../providers/magic-ball/magic-ball';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string = 'My Page'
  answer: any = "..."

  constructor(
    public navCtrl: NavController,
    public magicBall: MagicBallProvider
  ) { }

  changeTitle(title) {
    this.title = title
  }

  showAnswer(){
    this.answer = this.magicBall.getRandomAnswer();
  }
}
