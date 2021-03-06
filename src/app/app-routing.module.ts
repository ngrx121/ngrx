import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'about' , component : AboutComponent},
  { path : 'contact' , component : ContactComponent},
  { path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'stocks',
    loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
