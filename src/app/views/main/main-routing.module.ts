import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ProductPageComponent} from './product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'product/:id',
    component: ProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
