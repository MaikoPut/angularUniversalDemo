import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component/home.component';

import { ItemService } from './services/item.service';

import { Item } from './models/item.model';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-universal-cli'}),
    HttpModule
  ],
  providers: [ ItemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
