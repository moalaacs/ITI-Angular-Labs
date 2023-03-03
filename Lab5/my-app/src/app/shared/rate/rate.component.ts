import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent {
  @Input() rating =0;
  rateWidth = 50;
  ngOnChanges(){
    this.rateWidth = this.rating * 15;
  }
}
