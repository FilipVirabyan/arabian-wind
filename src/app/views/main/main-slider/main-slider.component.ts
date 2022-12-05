import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  options = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
    arrows: true,

    fade: true,

    prevArrow: '<button type="button" class="prev-slide slick-arrow"><i class="fa fa-long-arrow-left"></i> </button>',
    nextArrow: '<button type="button" class="next-slide slick-arrow"><i class="fa fa-long-arrow-right"></i></button>',
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
          autoplay: true,
        }
      }
    ]
  };

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  scrollTo() {
    let el = document.getElementById('products-slider');
    el?.scrollIntoView({behavior: 'smooth'});
  }

}
