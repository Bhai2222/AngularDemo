import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { CardComponent } from './components/card/card.component';
import { SignupComponent } from './components/signup/signup.component';
import { WebInfoComponent } from './components/web-info/web-info.component';
import { ServicesComponent } from './components/services/services.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { ClientProductsComponent } from './components/client-products/client-products.component';
import { AboutComponent } from './components/about/about.component';
import { CurrentOpeningsComponent } from './components/current-openings/current-openings.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { OurNewProdutsComponent } from './components/our-new-produts/our-new-produts.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'save', component: StudentViewComponent },
  { path: 'card', component: CardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'info', component: WebInfoComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'OurProducts', component: OurProductsComponent },
  { path: 'ClientProducts', component: ClientProductsComponent },
  { path: 'About', component: AboutComponent },
  { path: 'CurrentOpenings', component: CurrentOpeningsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'OurNewProducts', component: OurNewProdutsComponent },
  { path: 'MeetTheTeam', component: MeetTheTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentViewComponent, CardComponent, HomePageComponent]
