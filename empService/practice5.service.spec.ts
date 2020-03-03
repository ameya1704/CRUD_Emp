import { TestBed } from '@angular/core/testing';

import { Practice5Service } from './practice5.service';

describe('Practice5Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Practice5Service = TestBed.get(Practice5Service);
    expect(service).toBeTruthy();
  });
});
