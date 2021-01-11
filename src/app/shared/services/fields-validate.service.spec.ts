import { TestBed } from '@angular/core/testing';

import { FieldsValidateService } from './fields-validate.service';

describe('FieldsValidateService', () => {
  let service: FieldsValidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldsValidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
