import {Component, OnInit} from '@angular/core';
import {Notes, Product} from '../../../../core/models';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  imageBase = `${environment.baseUrl}products/image/`
  products: Product[] = [
    // @ts-ignore
    {
      id: '1',
      categori_id: 45,
      name: 'string',
      images: [''],
      description: 'string',
      price: '100',
    },
    // @ts-ignore
    {
      id: '1',
      categori_id: 45,
      name: 'string',
      images: [''],
      description: 'string',
      price: '100',
    },
    // @ts-ignore
    {
      id: '1',
      categori_id: 45,
      name: 'string',
      images: [''],
      description: 'string',
      price: '100',
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
