import { Injectable } from '@angular/core';
import { Message } from 'src/app/_models/classes/common';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: Array<Message> = [];
  selectedMsg: number;
  isDisplayed = false;
  visTimeout: any;
  timeoutDelay = 1000;
  constructor() { }


  addMessage(message: Message): void {
 //   alert(message.msgObj[0].text);
//  this.messages.unshift(message);
    const objectModifiedIndex = this.messages.findIndex(objectModified => objectModified.msgObj === message.msgObj);
    const currentDate = new Date();

    if (this.messages.length > 0) {
      this.messages.splice(0, 1);
    }

    if (objectModifiedIndex === -1) {
      this.messages.unshift(message);
    } else {
      if (this.messages.length > 0) {
        this.messages[objectModifiedIndex].cssClass = 'flash';
      }
    
      // this.closeMe(objectModifiedIndex);
      // this.messages.unshift(message);
    }
    //   clearTimeout(this.visTimeout);
    // this.visTimeout = setTimeout(() => {
    //   this.closeMe(this.messages.length - 1);
    // }, this.timeoutDelay * (message.timer || 10000));
  }

  clearAll() {
    this.messages = [];
  }

  closeMe(i: number): void {
    this.messages.splice(i, 1);
  }

}
