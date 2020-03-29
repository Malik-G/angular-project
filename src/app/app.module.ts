import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageBoxComponent } from './image-box/image-box.component';
import { TitleComponent } from './image-box/title/title.component';
import { GetDataService } from './image-box/get-data.service';

@NgModule({
  declarations: [AppComponent, ImageBoxComponent, TitleComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
