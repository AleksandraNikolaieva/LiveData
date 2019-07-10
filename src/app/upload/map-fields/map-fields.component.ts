import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-map-fields',
    templateUrl: './map-fields.component.html',
    styleUrls: ['./map-fields.component.scss']
})
export class MapFieldsComponent implements OnInit {
    constructor() {}
    title = 'Map your fields';
    selector = {
        fullname: '',
        lastname: '',
        firstname: '',
        email: ''
    };

    description: Array<string> = [
        'Select which of your columns to map to the corresponding columns that we require.',
        'All other columns will will remain unchanged in your file.'
    ];
    controls: Array<any> = [
        { title: 'Full Name', field: 'fullname', disabled: false },
        { title: 'First Name', field: 'firstname', disabled: true },
        { title: 'Last Name', field: 'lastname', disabled: true },
        { title: 'Email', field: 'email', disabled: false }
    ];
    columns: Array<string> = [
        'fullName',
        'email',
        'company',
        'phoneNumber',
        'companyStreetAddress',
        'fieldWeDontNeed',
        'fieldWeDontNeed'
    ];
    activeColumns: Array<string> = ['Full Name', 'Email', '', '', '', '', ''];
    list = [
        {
            fullName: 'Joshua Kim',
            email: 'jkim@blah.com',
            company: 'blah inc',
            phoneNumber: '805-555-3425',
            companyStreetAddress: '123 third st',
            fieldWeDontNeed: '1234556'
        }
    ];
    trackByFn(index) {
        return index;
    }
    ngOnInit() {}
}
