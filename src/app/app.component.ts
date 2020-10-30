import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chit Chat';
  message = '';
  chats = ['Hi', 'Hello', 'How are you?', 'I am fine','What about you?', 'I am good'];

  addChat() {
    if(this.message.length == 0)
    {
      return;
    }
    this.chats.push(this.message);
    this.message = '';

    window.setInterval(() => {
      const elem = document.getElementById('scrolldiv');
      elem.scrollTop = elem.scrollHeight;
    }, 500)
  }
}
