import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem("access_token");

    console.log("Token recuperado: ", authToken);
    /*const authReq = req.clone({
      headers: req.headers.set('Authorization',"Bearer " + authToken)      
    });*/
    //Forma mas resumida
    if (req.url.startsWith(environment.apiUrl)) {
      const authReq = req.clone({ setHeaders: { Authorization: "Bearer " + authToken } });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
