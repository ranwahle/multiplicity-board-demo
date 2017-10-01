import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiply-cell',
  templateUrl: './multiply-cell.component.html',
  styleUrls: ['./multiply-cell.component.scss']
})
export class MultiplyCellComponent implements OnInit {

  @Input() col: number;
  @Input() row: number;
  guessed: boolean;
  shouldIGuess: boolean;
  guess: number;
  constructor() {
    this.shouldIGuess = Math.floor( Math.random() * 10)  % 2 === 0;
  }

  onChange() {
    if (this.guess === this.col * this.row) {
      const audio = new Audio('/assets/KolHakavod.m4a');
      audio.play();
      this.shouldIGuess = false;
      this.guessed = true;

    } else {
      const audio = new Audio('/assets/WrongAnswer.m4a');
      audio.play();
    }
  }

  ngOnInit() {
  }

}
