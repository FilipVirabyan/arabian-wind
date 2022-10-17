import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../core/api-services';
import {Product} from '../../../core/models/product.interface';
import {TranslateService} from '@ngx-translate/core';
import {Language, ProductCategory} from '../../../core/enums';
import {finalize} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  filteredProducts: Product[] = []
  sliderProducts: Product[] = []
  categoriesLoading = true;

  constructor(private _productsService: ProductsService,
              private spinner: NgxSpinnerService,
              private _translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.getFilterProducts();
    this.getSliderProducts();
    this._listenLanguageChange();
  }

  private _listenLanguageChange() {
    this._translateService.onLangChange
      .subscribe(lang => {
        this.getFilterProducts()
        this.getSliderProducts()
      })
  }

  getFilterProducts(category: number | null = null) {
    // @ts-ignore
    const lang = Language[this._translateService.currentLang]
    this.categoriesLoading = true;
    const paramsObj: any = {
      limit: 10,
      offset: 0,
      lang,
    }

    if (category !== null && category !== -1) {
      paramsObj.category = category
    }

    this.spinner.show()
    const params = new HttpParams().appendAll(paramsObj)
    this._productsService.getAllProducts(params)
      .pipe(finalize(() => {
        this.categoriesLoading = false
        this.spinner.hide()
      }))
      .subscribe((prods) => {
        this.filteredProducts = prods;
      })
  }

  getSliderProducts() {
    // @ts-ignore
    const lang = Language[this._translateService.currentLang]
    const paramsObj = {
      limit: 10,
      offset: 0,
      lang
    }
    const params = new HttpParams().appendAll(paramsObj)
    this._productsService.getAllProducts(params)
      .subscribe((prods) => {
        this.sliderProducts = [...prods, prods[1]];
      })
  }


}
