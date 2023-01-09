import { TestBed } from '@angular/core/testing';

import { LoginspotiService } from './loginspoti.service';

describe('LoginspotiService', () => {
  let service: LoginspotiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginspotiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
