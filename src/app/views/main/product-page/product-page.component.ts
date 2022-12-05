import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../../../core/api-services';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../core/models';
import {environment} from '../../../../environments/environment';
import {NgxSpinnerService} from 'ngx-spinner';
import {finalize, Subscription} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {Language, ProductCategory} from '../../../core/enums';

declare var $: any;

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, AfterViewInit, OnDestroy {
  private _productId = this._activatedRoute.snapshot.paramMap.get('id');
  product!: Product;
  activeTab = 'desc'
  imageBase = `${environment.baseUrl}products/image/`
  categories = [
    'New Arrivals',
    'Best Sellers',
    'Top Rates'
  ]
  subs!: Subscription;
  options = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    fade: true,
  }

  constructor(private _productApiService: ProductsService,
              private spinner: NgxSpinnerService,
              private _translateService: TranslateService,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._getProduct();
    this._listenTranslateChange()
  }


  private _listenTranslateChange() {
    this.subs = this._translateService.onLangChange
      .subscribe(() => {
        this._getProduct(true)
      })
  }

  private _getProduct(isLang = false) {
    this.spinner.show()
    // @ts-ignore
    const lang = Language[this._translateService.currentLang]
    this._productApiService.getProductById(this._productId!, lang)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe((prod) => {
        this.product = prod
      })
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }



}
