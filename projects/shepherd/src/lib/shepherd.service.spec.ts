import { TestBed } from '@angular/core/testing';

import { angularShepherdSVC } from './shepherd.service';

describe('angularShepherdSVC', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: angularShepherdSVC = TestBed.get(angularShepherdSVC);
    expect(service).toBeTruthy();
  });
});
