import {
  animate,
  style,
  transition,
  trigger, 
  AnimationEvent

} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.css'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)'}),
        animate('150ms', style({ transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)'}),
        animate('150ms', style({ transform: 'scale(0.5)' }))
      ]),
    ]),
  ]
})
export class GalleryLightboxComponent implements OnInit {
  @Input() galleryData: Item[] = [];
  @Input() showCount = false;

  previewImage = false;
  showMask = false;
  currentLinghtboxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  ngOnInit(): void {
    // Get a gallery length
    this.totalImageCount = this.galleryData.length;

  };

  onPreviewImage(index: number): void {
    // Show image 

    //show
    this.showMask = true;
    this.previewImage = true;

    // get a image index for the gallery length
    this.currentIndex = index;

    // change image
    this.currentLinghtboxImage = this.galleryData[index];

  };

 /*
  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }
*/
  onClosePreview() {
    this.previewImage = false;
    this.showMask = false;
  }; 

  

  next(): void {
    this.currentIndex = this.currentIndex + 1; 

    if(this.currentIndex > this.galleryData.length - 1) {
      this.currentIndex = 0;
    }

    this.currentLinghtboxImage = this.galleryData[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1; 
    if(this.currentIndex < 0) {
      this.currentIndex = this.galleryData.length - 1 ;
    }

    this.currentLinghtboxImage = this.galleryData[this.currentIndex];

  }
}

