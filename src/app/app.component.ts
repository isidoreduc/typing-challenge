import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'typo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randoSentence = lorem.sentence();
  userInput = '';

  onInput = (value: string) => {
    // console.log(value);
    this.userInput = value;
    // console.log(this.userInput);
  };

  compare = (letterFromRandoSentence: string, letterFromInput: string) => {
    if (!letterFromInput)
      return 'gray';
    return letterFromRandoSentence === letterFromInput ? 'correct' : 'incorrect';
  };
};



