import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Input() text: string = '';
@Input() defaultText: string = '';
@Input() color: string = '';
@Output() onMouseClick = new EventEmitter();
onClick1() {
  this.onMouseClick.emit();
};
}
