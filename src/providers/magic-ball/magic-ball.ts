import { Injectable } from '@angular/core';

@Injectable()
export class MagicBallProvider {

  answers: Array<string> = [
    'Yes',
    'No',
    'Maybe',
    'All signs point to yes',
    'Try again later',
    'Without a doubt',
    'Don\'t count on it',
    'Most likely',
    'Absolutely not'
  ];

  constructor() {
  }

  getAnswers(){
    return this.answers
  }

  getRandomAnswer(){
    let position = this.getRandomInt(0, this.answers.length-1);
    return this.answers[position]
  }

  getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
