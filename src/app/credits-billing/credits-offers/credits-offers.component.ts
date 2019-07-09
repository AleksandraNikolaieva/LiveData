import { Component, OnInit, Input, Output } from '@angular/core';
import { SelectedPackageService } from '../services/selected-package.service';
import { Package } from 'src/app/models';


@Component({
    selector: 'app-credits-offers',
    templateUrl: './credits-offers.component.html',
    styleUrls: ['./credits-offers.component.scss']
})
export class CreditsOffersComponent implements OnInit {
    constructor(private selectedPackage: SelectedPackageService) {}
    optionSelected: string;
    @Input() packages: Array<Package>;

    ngOnInit() {
        this.optionSelected = this.packages[0].value.toString();
    }

    modelChanged() {
        this.selectedPackage.package = this.packages.find(
            el => el.value === parseInt(this.optionSelected, 10)
        );
    }
}
