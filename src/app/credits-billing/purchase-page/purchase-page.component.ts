import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedPackageService } from '../services/selected-package.service';

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase-page.component.html',
  styleUrls: ['./purchase-page.component.scss']
})
export class PurchasePageComponent implements OnInit {

  constructor(private router: Router,private selectedPackage: SelectedPackageService) { }

  option: any;
  
  packages = [
    {
      value: 100,
      totalPrice: '$10',
      pricePerCredit: '$0.10'
    },
    {
      value: 1000,
      totalPrice: '$90',
      pricePerCredit: '$0.09'
    },
    {
      value: 5000,
      totalPrice: '$400',
      pricePerCredit: '$0.08'
    },
    {
      value: 10000,
      totalPrice: '$750',
      pricePerCredit: '$0.075'
    }
  ];

  goCheckout() {
    this.router.navigateByUrl('credits/payment');
  }
  
  ngOnInit() {
  }


}
