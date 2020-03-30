import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-app-a';
  name: string;
  @Output() emitEventToContainer: EventEmitter<string> = new EventEmitter();

  getProfile(event) {
    this.emitEventToContainer.emit(event);
    console.log(event);
  }

}
