import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public calculation_array: number[] = [0,0,0];

  public cleanFields() {
    this.calculation_array = [0,0,0];
  };

  public calculateAverage () {
    this.calculation_array[2] =  (this.calculation_array[0] + this.calculation_array[1]) / 2;
  }

}
