import { FrontHomeComponent } from './components/front-products/front-home.component';
import { FrontMainComponent } from './components/front-main/front-main.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './utils/header/header.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { HomePriceComponent } from './components/home-price/home-price.component';
import { BestLowestComponent } from './components/best-lowest/best-lowest.component';
import { BannerComponent } from './utils/banner/banner.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: FrontHomeComponent,
  children: [
    { path: 'products', component: FrontHomeComponent },
    // { path: 'categories', component: FrontCategoriesComponent }
  ]
  }
]

@NgModule({
  declarations: [FrontMainComponent, FrontHomeComponent, HeaderComponent, NavbarComponent, FooterComponent, HomePriceComponent, BestLowestComponent, BannerComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class FrontModule { }
