import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 
import { HomeComponent } from "./pages/home/home.component";
import { SocialMediaComponent } from "./pages/social-media/social-media.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";




const routes: Routes = [ 
    {path: '', component: HomeComponent},
    {path: 'social-media', component: SocialMediaComponent}, 
    {path: 'gallery', component: GalleryComponent}

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }