import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Product} from '../../../core/models/product.interface';
import {ProductCategory} from '../../../core/enums';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-products-with-filter',
  templateUrl: './products-with-filter.component.html',
  styleUrls: ['./products-with-filter.component.scss']
})
export class ProductsWithFilterComponent implements OnInit {
  @Input() products: Product[] = []
  @Input() loading!: boolean;
  @Output() categoryChange: EventEmitter<ProductCategory> = new EventEmitter<ProductCategory>();
  imageBase = `${environment.baseUrl}products/image/`
  productCategory = ProductCategory

  constructor(private spinner: NgxSpinnerService,) {
  }

  ngOnInit(): void {
  }

}
