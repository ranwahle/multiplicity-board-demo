import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DimensionsComponent } from './dimensions/dimensions.component';
import {FormsModule} from '@angular/forms';
import { BoardComponent } from './board/board.component';
import { MultiplyCellComponent } from './multiply-cell/multiply-cell.component';

@NgModule({
  declarations: [

    AppComponent,
    DimensionsComponent,
    BoardComponent,
    MultiplyCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
