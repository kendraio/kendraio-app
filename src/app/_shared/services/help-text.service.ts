import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { HelpText } from 'src/app/_models/classes/common';
import { MessageService } from './message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelpTextService {
  // pageHelp: HelpText[];
  pageHelp: any;
  itemHelp: any;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router,
  ) { }


  askHelp(
    pageRef: string,
    itemRef: string,
    css?: string, 
    timer?: number, 
    evt?: Event
    ) {
this.getItemHelpText(pageRef, itemRef);
  }


  getItemHelpText(pageRef: string, itemRef: string): any {
    this.getHelpText().subscribe((res: any[]) => {
      this.pageHelp = res.filter(page => page.section === pageRef);
from(this.pageHelp).subscribe((items: any) => {
  this.itemHelp = items.items.filter(section => section.ref === itemRef);
  this.askHelpHandler(this.itemHelp, 'css', 0);
});

    });
  }


  getHelpTextForItem(pageRef: string, itemRef: string): string {
    this.http.get('./assets/helpText.json').subscribe((res: Array<any>) => {
      this.pageHelp = res;
      // .filter(page => page.section === pageRef);
      // this.itemHelp = this.pageHelp.filter(page => page.items.ref === itemRef);
    });
  //   this.getHelpTextForSection(pageRef)
  //   .subscribe((res: any) => {
  // //   console.log(res);
  //    this.itemHelp = res.filter(page => page.items.ref === itemRef);
  //   });
//  return this.itemHelp;
return this.itemHelp;
  }


  getHelpTextForSection(pageRef: string): Observable<any> {
    this.getHelpText()
    .subscribe((res: any) => {
  //   console.log(res);
     this.pageHelp = res.filter(page => page.section === pageRef);
    });
    console.log(this.pageHelp);
    return from(this.pageHelp);
  }

  public   getHelpText(): Observable<any> {
    return this.http.get('./assets/helpText.json');
}



askHelpHandler(msgObj: any, css: string, timer?: number) {
  // OBSELETE
  this.router.navigate([{ outlets: { popup: ['messages'] } }]);
  // this.messageService.isDisplayed = true;
  this.messageService.addMessage({
    msgObj: msgObj,
    cssClass: css,
    timer: timer
  });
}





}
