import { TestBed } from '@angular/core/testing';

import { AvisoDataService } from './aviso.data.service';

describe('AvisoDataService', () => {
  let service: AvisoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvisoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
