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
import { BootstrapHomeComponent } from './bootstrap-home/bootstrap-home.component';
// RouterModule is what AppRoutingModule is using behind the scenes
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DisplaynameComponent } from './displayname/displayname.component';
import { NavButtonComponent } from './nav-button/nav-button.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageBoxComponent,
    GreetingComponent,
    TabsComponentComponent,
    MasterButtonComponent,
    BootstrapHomeComponent,
    HeaderComponent,
    FooterComponent,
    DisplaynameComponent,
    NavButtonComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: BootstrapHomeComponent },
      { path: 'canyons', component: ImageBoxComponent },
      { path: 'displayname/:name', component: DisplaynameComponent },
      { path: 'master-button', component: MasterButtonComponent },
      { path: 'tabs', component: TabsComponentComponent },
      { path: '**', component: BootstrapHomeComponent }
    ])
  ],
  // imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
