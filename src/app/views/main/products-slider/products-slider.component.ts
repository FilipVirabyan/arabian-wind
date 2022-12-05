import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Product} from '../../../core/models';
import {environment} from '../../../../environments/environment';
import {ProductCategory} from '../../../core/enums';
import {NgxSpinnerService} from 'ngx-spinner';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})
export class ProductsSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  products: Product[] = [];
  hidden = true
  options = {
    arrows: !0,
    infinite: !0,
    dots: !1,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 2e3,
    prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-long-arrow-left"></i> </button>',
    nextArrow: '<button type="button" class="next-slide"><i class="fa fa-long-arrow-right"></i> </button>',
    responsive: [{breakpoint: 1200, settings: {slidesToShow: 3}}, {
      breakpoint: 1024,
      settings: {slidesToShow: 3}
    }, {breakpoint: 600, settings: {slidesToShow: 2}}]
  }

  @Input() set prods(prods: Product[]) {
    if (prods.length) {
      this.products = prods;
    }
  };

  @Output() categoryChange: EventEmitter<ProductCategory> = new EventEmitter<ProductCategory>();
  imageBase = `${environment.baseUrl}products/image/`;
  productCategory = ProductCategory
  subs!: Subscription;


  constructor(private spinner: NgxSpinnerService,
              private _translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.listenTranslateChange()
  }

  ngAfterViewInit() {
  }

  private listenTranslateChange() {
    this.subs = this._translateService.onLangChange
      .subscribe(value => {
        this.hidden = true
      })
  }

  ngOnDestroy() {
    this.subs?.unsubscribe()
  }
}
