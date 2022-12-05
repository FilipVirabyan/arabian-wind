import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MiddleLinkSectionComponent } from './middle-link-section/middle-link-section.component';
import { ProductsWithFilterComponent } from './products-with-filter/products-with-filter.component';
import { LastLinkSectionComponent } from './last-link-section/last-link-section.component';
import { ProductsSliderComponent } from './products-slider/products-slider.component';
import { AdSectionComponent } from './ad-section/ad-section.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GetNoteNamePipe } from './pipes/get-note-name.pipe';
import {TranslateModule} from '@ngx-translate/core';
import { LanguageControllerComponent } from './language-controller/language-controller.component';
import { NotesSliderPipe } from './pipes/notes-slider.pipe';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    MainSliderComponent,
    MiddleLinkSectionComponent,
    ProductsWithFilterComponent,
    LastLinkSectionComponent,
    ProductsSliderComponent,
    AdSectionComponent,
    FooterComponent,
    ProductPageComponent,
    ContactComponent,
    GetNoteNamePipe,
    LanguageControllerComponent,
    NotesSliderPipe,
    AboutUsComponent
  ],
    imports: [
        CommonModule,
        MainRoutingModule,
        ReactiveFormsModule,
        TranslateModule,
        SlickCarouselModule,
    ]
})
export class MainModule { }
