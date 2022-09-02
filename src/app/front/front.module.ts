import { FrontHomeComponent } from './components/front-products/front-home.component';
import { FrontMainComponent } from './components/front-main/front-main.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './utils/header/header.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { HomePriceComponent } from './components/home-price/home-price.component';
import { BannerComponent } from './utils/banner/banner.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AllFreeMarketComponent } from './components/All-Price-Tables/all-free-market/all-free-market.component';
import { GoldsVarietiesComponent } from './components/All-Price-Tables/golds-varieties/golds-varieties.component';
import { CurrencyComponent } from './components/All-Price-Tables/currency/currency.component';
import { PariteComponent } from './components/All-Price-Tables/parite/parite.component';

const routes: Routes = [
  { path: '', component: HomePriceComponent,
  children: [
    { path: 'products', component: FrontHomeComponent },
    // { path: 'categories', component: FrontCategoriesComponent }
  ]
  }
]

@NgModule({
  declarations: [FrontMainComponent, FrontHomeComponent, HeaderComponent, NavbarComponent, FooterComponent, HomePriceComponent, BannerComponent, AboutComponent, ContactComponent, AllFreeMarketComponent, GoldsVarietiesComponent, CurrencyComponent, PariteComponent],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class FrontModule { }
