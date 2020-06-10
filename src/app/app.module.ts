import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageBoxComponent } from './image-box/image-box.component';
import { GreetingComponent } from './image-box/greeting/greeting.component';
import { GetDataService } from './image-box/get-data.service';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { MasterButtonComponent } from './master-button/master-button.component';

@NgModule({
  declarations: [AppComponent, ImageBoxComponent, GreetingComponent, TabsComponentComponent, MasterButtonComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
