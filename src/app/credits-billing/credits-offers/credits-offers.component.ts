import { Component, OnInit, Input, Output } from '@angular/core';
import { SelectedPackageService } from '../services/selected-package.service';

@Component({
  selector: 'app-credits-offers',
  templateUrl: './credits-offers.component.html',
  styleUrls: ['./credits-offers.component.scss']
})
export class CreditsOffersComponent implements OnInit {

  constructor(private selectedPackage: SelectedPackageService) { }
   optionSelected: number;
  @Input() packages: Array<Package>;


  ngOnInit() {
  }

  modelChanged() {
    this.selectedPackage.package = this.packages.find(el => el.value == this.optionSelected);
  }
}
