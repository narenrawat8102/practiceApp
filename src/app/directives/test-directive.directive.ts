import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTestDirective]',
})
export class TestDirectiveDirective {
  @HostBinding('style.backgroundColor') bgColor: any;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(
    //   this.eleRef.nativeElement,
    //   'backgroundColor',
    //   'yellow'
    // );
  }

  // Will be applied on the element/div where this directive is applied
  @HostListener('click') myClick() {
    this.bgColor = 'blue';
  }

  @HostListener('mouseover') myMouseover() {
    // alert('mouseover');
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'backgroundColor',
      'pink'
    );
  }

  @HostListener('mouseout') myMouseout() {
    // alert('mouseover');
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'backgroundColor',
      'yellow'
    );
  }
}
