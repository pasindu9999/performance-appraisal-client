import { TestBed } from '@angular/core/testing';

import { PAsheetService } from './pasheet.service';

describe('PAsheetService', () => {
  let service: PAsheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PAsheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
