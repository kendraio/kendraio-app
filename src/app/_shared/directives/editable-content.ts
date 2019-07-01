import {
    Directive,
    ElementRef,
    Renderer2,
    HostListener,
    forwardRef,
    Input,
    OnInit,
    HostBinding
  } from '@angular/core';

  import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

  @Directive({
    selector: '[contenteditable]',
    providers:
    [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ContentEditableFormDirective), multi: true }
    ]
  })
  export class ContentEditableFormDirective implements ControlValueAccessor {
    @HostBinding('attr.contenteditable') enabled = true;

    private onChange: (value: string) => void;
    private onTouched: () => void;
    private removeDisabledState: () => void;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('input') onInput(): void {
        console.log(this.elementRef.nativeElement.innerText)
      this.onChange(this.elementRef.nativeElement.innerText);
    }

    @HostListener('blur') onBlur(): void {
      this.onTouched();
    }

    writeValue(value: string): void {
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', value || '');
    }

    registerOnChange(onChange: (value: string) => void): void {
      this.onChange = onChange;
    }

    registerOnTouched(onTouched: () => void): void {
      this.onTouched = onTouched;
    }

    setDisabledState(disabled: boolean): void {
      this.enabled = !disabled;
    }
  }