import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../core/models';
import {ProductsService} from '../../../core/api-services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    description: new FormControl('', [Validators.required])
  })

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
  }

  sendForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched()
      return;
    }
    this.productService.sendEmail(this.contactForm.getRawValue())
      .subscribe(() => {
        this.contactForm.reset();
      })

  }

}
