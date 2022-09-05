import { FrontHomeComponent } from './components/front-products/front-home.component';

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
import { SafePipe } from './_sharred/_models/safe.pipe';
import { OurStoresComponent } from './pages/our-stores/our-stores.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: HomePriceComponent,
    children: [
      { path: 'products', component: FrontHomeComponent },
      // { path: 'categories', component: FrontCategoriesComponent }
    ],
  },
];

@NgModule({
  declarations: [
    SafePipe,
    FrontHomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomePriceComponent,
    BannerComponent,
    AboutComponent,
    ContactComponent,
    AllFreeMarketComponent,
    GoldsVarietiesComponent,
    CurrencyComponent,
    PariteComponent,
    OurStoresComponent,
  ],
  imports: [CommonModule,
            RouterModule.forChild(routes),
            MatIconModule,
            MatToolbarModule,
            MatSlideToggleModule,
            MatSidenavModule,
            MatDialogModule,
            MatButtonModule],
})
export class FrontModule {}
