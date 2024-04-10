import { TestBed } from '@angular/core/testing';

import { LoginInterfaceService } from './login-interface.service';

describe('DatabaseInteractionService', () => {
  let service: LoginInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
