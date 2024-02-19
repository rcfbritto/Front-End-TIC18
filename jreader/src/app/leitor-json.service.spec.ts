import { TestBed } from '@angular/core/testing';

import { LeitorJsonService } from './leitor-json.service';

describe('LeitorJsonService', () => {
  let service: LeitorJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeitorJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
