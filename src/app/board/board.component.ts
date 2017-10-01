import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() dimensions: number;

  rows: number[];
  cols: number[];

  constructor() {
  }

  ngOnInit() {
    this.rows = Array(this.dimensions - 1);

    console.log('rows', this.rows);
    this.cols = Array(this.dimensions - 1);
  }

}
