import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})
export class ProductsSliderComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    $(".slick_product_new-h4").slick({
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
    })
  }
}
