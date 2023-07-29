import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SubSectionComponent } from './components/sub-section/sub-section.component';
import { CardBtnComponent } from './components/card-btn/card-btn.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardSmComponent } from './components/card-sm/card-sm.component';
import { SocialMediaComponent } from './pages/social-media/social-media.component';
import { BackArrowComponent } from './components/back-arrow/back-arrow.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CardImgComponent } from './components/card-img/card-img.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SubSectionComponent,
    CardBtnComponent,
    FooterComponent,
    CardSmComponent,
    SocialMediaComponent, 
    BackArrowComponent, 
    GalleryComponent,
    CardImgComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
