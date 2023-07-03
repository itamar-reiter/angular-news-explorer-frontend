import { Component, Input } from '@angular/core';
import months from '../../months'

@Component({
  selector: 'app-months-list',
  templateUrl: './months-list.component.html',
  styleUrls: ['./months-list.component.css']
})
export class MonthsListComponent {
@Input() months = months;
}
