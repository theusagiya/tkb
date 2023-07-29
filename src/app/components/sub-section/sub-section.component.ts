import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.css']
})
export class SubSectionComponent implements OnInit {

  @Input() subTitle!: string; 
  @Input() typeText: 'larger' | 'litle' = 'litle';
  @Input() typeTextBars: 'larger' | 'litle' = 'litle';
 

  constructor() {}

  ngOnInit(): void {
    
  }

}
