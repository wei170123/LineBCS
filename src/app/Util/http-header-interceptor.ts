import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
    constructor() { }
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newRequest = req.clone({ setHeaders: { Authorization: 'Bearer ' + localStorage.getItem('X-BCS-TOKEN') } });
        return next.handle(newRequest);
    }
}