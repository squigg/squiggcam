import {inject, TestBed} from '@angular/core/testing';

import {CustomHttpInterceptorService} from './interceptor.service';

describe('InterceptorService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CustomHttpInterceptorService]
        });
    });

    it('should be created', inject([CustomHttpInterceptorService], (service: CustomHttpInterceptorService) => {
        expect(service).toBeTruthy();
    }));
});
