import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../core/api-services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  filteredProducts = []

  constructor(private _productsService: ProductsService) {
  }

  ngOnInit(): void {
    this._productsService.getAllProducts(10, 0).subscribe((prods) => {
      console.log(prods);
      this.filteredProducts = prods;
    })
  }


}
