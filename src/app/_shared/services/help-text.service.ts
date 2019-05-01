import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { HelpText } from 'src/app/_models/classes/common';
import { MessageService } from './message.service';
import { Router } from '@angular/router';
import { AppConfigService } from './config.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HelpTextService {
  // pageHelp: HelpText[];
  pageHelp: any;
  itemHelp: any;

  constructor(
    // @Inject(LOCALE_ID) public locale: string,
    private http: HttpClient,
    private messageService: MessageService,
    private config: AppConfigService,
    private router: Router,
    public translate: TranslateService
  ) {


  }


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
    let helpText: string;
    this.translate.get(itemRef).subscribe((str) => {
      helpText =  str;
      // return boo;
      this.itemHelp = {
        ref: '',
        text: helpText
      };



    });

    this.askHelpHandler(this.itemHelp, 'css', 0);
    // this.getHelpText().subscribe((res: any[]) => {
    //   this.pageHelp = res.filter(page => page.section === pageRef);
    //   from(this.pageHelp).subscribe((items: any) => {
    //     // this.itemHelp = items.items.filter(section => section.ref === itemRef);

    //     //  let helpText: string;

    //     this.translate.get(itemRef).subscribe((str) => {
    //       helpText =  str;
    //       // return boo;
    //     });
       
    //     this.itemHelp = {
    //       ref: '',
    //       text: helpText
    //     };

    //     // this.itemHelp = this.translate.get('works.intro');
    //     this.askHelpHandler(this.itemHelp, 'css', 0);
    //   });

    // });
  }


  getHelpTextForItem(pageRef: string, itemRef: string): string {
    this.http.get('assets/helpText.json').subscribe((res: Array<any>) => {
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

  public getHelpText(): Observable<any> {
    return this.http.get('assets/help-text/helpText' + this.config.locale + '.json');
  }



  askHelpHandler(msgObj: any, css: string, timer?: number) {
    // this.messageService.isDisplayed = true;
    this.messageService.addMessage({
      msgObj: msgObj,
      cssClass: css,
      timer: timer
    });
    this.router.navigate([{ outlets: { popup: ['messages'] } }]);
  }





}
