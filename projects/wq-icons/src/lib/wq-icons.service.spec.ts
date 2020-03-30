import { TestBed } from '@angular/core/testing';

import { WqIconsService } from './wq-icons.service';

describe('WqIconsService', () => {
  let service: WqIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WqIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
