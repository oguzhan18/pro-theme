import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeProvider } from './front/_sharred/_services/home.provider';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthenticationService } from './authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './_guards';
import { NotPageComponent } from './not-page/not-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HomeProvider,AuthenticationService,AuthGuard,
    { provide: LocationStrategy,  useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
