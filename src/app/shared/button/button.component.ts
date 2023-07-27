import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() baha : number = 0
@Input() title:string=""
@Input() buttonType:string=""
@Input() colorBtn:string=""
@Output() submitValue= new EventEmitter()

submitFormGroupe(){
  console.log(this.buttonType, this.baha);
  
  this.submitValue.emit()
}
}
