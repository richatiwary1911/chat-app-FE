import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  socket;
  constructor() { 
    this.socket = io.connect('http://localhost:8000');
    this.socket.on('connect', () => {
      console.log("Connected to the server");
    });
  }
}
