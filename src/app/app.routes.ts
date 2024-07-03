import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductGalleryComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
