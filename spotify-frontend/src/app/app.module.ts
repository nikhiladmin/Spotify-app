import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';

import { AddSongComponent } from './components/add-song/add-song.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeScreenComponent,
    AddSongComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
