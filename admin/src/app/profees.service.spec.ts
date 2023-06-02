import { TestBed } from '@angular/core/testing';

import { ProfeesService } from './profees.service';

describe('ProfeesService', () => {
  let service: ProfeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
