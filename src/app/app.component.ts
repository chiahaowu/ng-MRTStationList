import { Component } from '@angular/core';

// import my Constant
import { stationList } from './station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MRTStationList';
  list = stationList
}
