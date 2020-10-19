
import { LoginService } from './sevices/login.service';
import { FormioAppConfig, FormioModule } from 'angular-formio';
import { LoginFormService } from './formio.service.ts/login-form.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
 import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebService } from './sevices/web.service';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HelperService } from './Helper/helper.service';
import { AuthInterceptor } from './sevices/auth.service';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { WebInfoComponent } from './components/web-info/web-info.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { ClientProductsComponent } from './components/client-products/client-products.component';
import { AboutComponent } from './components/about/about.component';
import { CurrentOpeningsComponent } from './components/current-openings/current-openings.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OurNewProdutsComponent } from './components/our-new-produts/our-new-produts.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';
import { IsoInfoComponent } from './components/iso-info/iso-info.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './Helper/alert.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
  // import { initProviderFactory } from './sevices/init-app-provider.factory';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    StudentViewComponent,
    CardComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    WebInfoComponent,
    HomePageComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    ServicesComponent,
    OurProductsComponent,
    ClientProductsComponent,
    AboutComponent,
    CurrentOpeningsComponent,
    ContactComponent,
    OurNewProdutsComponent,
    MeetTheTeamComponent,
    AlertComponent,
    IsoInfoComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormioModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot() 
  ],
  entryComponents: [
    AlertComponent
  ],
  
  providers: [WebService,
    HelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
     },
     {
     provide: LocationStrategy, useClass: HashLocationStrategy
     },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initProviderFactory,
    //   deps: [HelperService],
    //   multi: true,
    // },
    LoginService,
    FormioAppConfig,
    AlertService,
    LoginFormService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
