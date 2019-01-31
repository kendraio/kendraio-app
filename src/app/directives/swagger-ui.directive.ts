import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Directive({
  selector: '[appSwaggerUi]'
})
export class SwaggerUiDirective implements AfterViewInit {

  @Input('appSwaggerUi') url: string;

  constructor(
    private readonly el: ElementRef
  ) { }

  ngAfterViewInit(): void {
    SwaggerUI({
      domNode: this.el.nativeElement,
      url: this.url
    });
  }
}
