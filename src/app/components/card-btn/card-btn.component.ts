import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-btn',
  templateUrl: './card-btn.component.html',
  styleUrls: ['./card-btn.component.css']
})
export class CardBtnComponent   {
 
  @Input() text!: string; 
  @Input() Rlink!: string; 

  @Input() typeBtn: 'color-one' | 'color-two' = 'color-one';

  
}
