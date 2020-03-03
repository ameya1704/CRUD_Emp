import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirCom]'
})
export class DirComDirective {

  constructor(private obj : ElementRef)
  {
    this.obj.nativeElement.style.color = 'yellow';
    this.obj.nativeElement.style.font ='Times New Roman';
  }
}