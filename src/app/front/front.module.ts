import { FrontHomeComponent } from './components/front-products/front-home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { HomePriceComponent } from './components/home-price/home-price.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SafePipe } from './_sharred/_models/safe.pipe';
import { OurStoresComponent } from './pages/our-stores/our-stores.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GoldComponent } from './pages/all-price-pages/gold/gold.component';
import { ParityComponent } from './pages/all-price-pages/parity/parity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DovizComponent } from './pages/all-price-pages/doviz/doviz.component';

const routes: Routes = [
  {
    path: '',
    component: FrontHomeComponent,
    children: [
      { path: '', component: HomePriceComponent },
      { path: 'stores', component: OurStoresComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'gold', component: GoldComponent },
      { path: 'parity', component: ParityComponent },
      { path: 'currency', component: DovizComponent },
    ],
  },
];

@NgModule({
  declarations: [
    SafePipe,
    FrontHomeComponent,
    NavbarComponent,
    FooterComponent,
    HomePriceComponent,
    AboutComponent,
    ContactComponent,
    // PariteComponent,
    OurStoresComponent,
    GoldComponent,
    ParityComponent,
    DovizComponent,
  ],
  imports: [CommonModule,
            RouterModule.forChild(routes),
            MatIconModule,
            MatToolbarModule,
            MatSlideToggleModule,
            MatSidenavModule,
            MatDialogModule,
            MatButtonModule,
            ReactiveFormsModule,
            FormsModule],
})
export class FrontModule {}
