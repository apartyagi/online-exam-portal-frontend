import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthIntercepterInterceptor implements HttpInterceptor {

  constructor(private _login_serv:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authreq=request;
    const token=this._login_serv.get_token_from_localstorage();
      if(token!=null)
      {
        authreq=authreq.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
      });
      }
      else{
        console.log("in intercept erre");
      }
    return next.handle(authreq);

  }
}
export const AuthIntercepterProvider=[
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthIntercepterInterceptor,
    multi:true,
  }
]