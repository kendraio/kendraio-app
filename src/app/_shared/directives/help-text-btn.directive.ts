import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { HelpTextService } from '../services/help-text.service';

@Directive({
  selector: '[appHelp]'
})
export class HelpTextBtnDirective {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private help: HelpTextService
  ) {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('?');
    this.renderer.appendChild(div, text);
    this.renderer.addClass(div, 'k-help-badge');
    this.renderer.appendChild(this.el.nativeElement, div);
    this.renderer.setProperty(this.el.nativeElement, 'alt', 'Help');
    this.el.nativeElement.style.position = 'relative';
    this.el.nativeElement.style.display = 'inline-block';
    this.renderer.listen(div, 'click', () => {
      this.highlight(this.helpRef);
    });
  }

  // @Input() defaultHelpRef: string;
  @Input('appHelp') helpRef: string;

  // @HostListener('click') onClick() {
  //   // this.highlight(this.helpRef);
  // }

  private highlight(helpRef: string) {
    this.help.askHelp('assets', helpRef); // todo: remove hard coding
  }

}
