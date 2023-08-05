import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-icon',
  templateUrl: './footer-icon.component.html',
  styleUrls: ['./footer-icon.component.css']
})
export class FooterIconComponent {
  @Input() Elink!: string;
  @Input() icon!: string;


}
