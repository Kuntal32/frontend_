import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable()

export class TokenIntercepterService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const apiservice = this.injector.get(ApiService);
    const tokenizeReq = req.clone({
      setHeaders : {
        Authorization: `Bearer ${apiservice.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
}
