import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-sm',
  templateUrl: './card-sm.component.html',
  styleUrls: ['./card-sm.component.css']
})
export class CardSmComponent {
  @Input() text!: string; 
  @Input() Rlink!: string; 
  @Input() icon!: string; 
}
