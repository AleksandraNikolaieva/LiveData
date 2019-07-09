import { TestBed } from '@angular/core/testing';

import { SelectedPackageService } from './selected-package.service';

describe('SelectedPackageService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: SelectedPackageService = TestBed.get(SelectedPackageService);
        expect(service).toBeTruthy();
    });
});
