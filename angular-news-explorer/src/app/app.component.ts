import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-news-explorer';

  sendConsoleLog = () => {
    console.log('Button clicked!');
  }
}
