import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartAngularComponent } from './start-angular/start-angular.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';




const routes: Routes = [
{path : '' , redirectTo : 'start' , pathMatch : 'full'},
{ path : 'start' , component : StartAngularComponent , title : 'Start Angular Component' },
{ path : 'portfolio' , component : PortfolioComponent , title : 'Portfolio Component' },
{ path : 'about' , component : AboutComponent , title : 'About Component' },
{ path : 'contact' , component : ContactComponent , title : 'Contact Component' },
{ path : '**' , component : NotFoundComponent , title : 'Error'}

];

@NgModule({
imports: [RouterModule.forRoot(routes) ],
exports: [RouterModule]
})
export class AppRoutingModule { }
