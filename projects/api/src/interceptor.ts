import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DateConverterInterceptor implements HttpInterceptor {
  private dateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)$/;
  private utcDateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.responseType !== 'json') {
      return next.handle(request);
    }

    return next.handle(request).pipe(
      map(event => {
        if (!(event instanceof HttpResponse)) {
          return event;
        }
        const originalBody = event.body;
        if (typeof originalBody === 'object') {
          try {
            const body = originalBody instanceof Array ? [...originalBody] : { ...originalBody };
            this.convertDates(body);
            return event.clone({ body });
          } catch (error) {
            throw new HttpErrorResponse({
              error: { error, text: originalBody },
              headers: event.headers,
              status: event.status,
              statusText: event.statusText,
              url: event.url || undefined,
            });
          }
        }
        return event;
      }),
    );
  }
  private convertDates(object: Object) {
    if (!object || !(object instanceof Object)) {
      return;
    }

    if (object instanceof Array) {
      object.forEach(val => {
        this.convertDates(val)
      })
  }

    for (const key of Object.keys(object)) {
      const value = object[key];

      if (value instanceof Array) {
        value.forEach(val => {
          this.convertDates(val)
        })
      }

      if (value instanceof Object) {
        this.convertDates(value);
      }

      if (typeof value === 'string' && (this.dateRegex.test(value) || this.utcDateRegex.test(value))) {
        object[key] = new Date(value);
      }
    }
  }
}
