import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credits-offers',
  templateUrl: './credits-offers.component.html',
  styleUrls: ['./credits-offers.component.scss']
})
export class CreditsOffersComponent implements OnInit {

  constructor() { }
  optionSelected: any;
  @Input() packages: any;

  ngOnInit() {
  }

}
