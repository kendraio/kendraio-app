import { Component} from '@angular/core';
import { MessageService } from '../_shared/services/message.service';
import { Router } from '@angular/router';
import { Animations } from '../_shared/animations';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  animations: [Animations.pageAni]

})
export class MessagesComponent {

  constructor(
    public messageService: MessageService,
    private router: Router) {

     // this.messageService.closeMe(0)

     }

close(): void {
    // Close the popup.
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDisplayed = false;
}
closeMe(i: number): void {
    this.messageService.messages.splice(i, 1);
}

}
