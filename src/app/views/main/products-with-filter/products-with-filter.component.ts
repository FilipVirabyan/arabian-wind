import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-products-with-filter',
  templateUrl: './products-with-filter.component.html',
  styleUrls: ['./products-with-filter.component.scss']
})
export class ProductsWithFilterComponent implements OnInit {
  @Input() products: any = []
  imageBase = `${environment.baseUrl}products/image/`

  constructor() {
  }

  ngOnInit(): void {
  }

}
