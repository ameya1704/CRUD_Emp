import { Component , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent
{
 @Input()
 title;
firstname : String ='';
lastname : String ='';
@Output()
eobj:EventEmitter <String> = new EventEmitter();
fullname() : void
{
  //alert(parseInt(this.a)+parseInt(this.b));
  this.eobj.emit(this.firstname +' '+this.lastname);
}
}