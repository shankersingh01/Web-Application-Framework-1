import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  // <-- Import CommonModule
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListingComponent } from './listing/listing.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ListingComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    CommonModule  // <-- Ensure this is imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
