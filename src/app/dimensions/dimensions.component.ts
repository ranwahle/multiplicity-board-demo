import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.scss']
})
export class DimensionsComponent implements OnInit {

  dimension: number;
  @Output() setDimenssions: EventEmitter<number> = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.setDimenssions.emit(this.dimension);
  }

}
