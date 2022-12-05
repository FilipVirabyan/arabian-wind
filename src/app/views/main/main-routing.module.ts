import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {ContactComponent} from './contact/contact.component';
import {AboutUsComponent} from './about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'product/:id',
    component: ProductPageComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
