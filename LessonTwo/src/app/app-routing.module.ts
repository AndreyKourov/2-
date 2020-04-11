import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ZadachiComponent } from './zadachi/zadachi.component';
import { OdnComponent } from './odn/odn.component';

const routes: Routes = [
  { path: '', component: ListProductsComponent },
  { path: 'view/:id', component: ViewProductsComponent },
  { path: 'tasks', component: ZadachiComponent },
  { path: 'odn/:id', component: OdnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
