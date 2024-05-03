import { TestBed } from '@angular/core/testing';

import { ZoomService } from './zoom.service';

describe('MapaServiceService', () => {
  let service: ZoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
