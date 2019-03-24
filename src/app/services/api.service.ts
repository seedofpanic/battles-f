import {Injectable} from '@angular/core';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {IAction} from '../models/IAction';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class APIService extends Subject<IAction> {
    ws$ = new ReplaySubject<WebSocket>(1);

    constructor(private httpClient: HttpClient) {
        super();
    }

    init() {
        this.get<{auth: boolean}>('/auth')
            .subscribe(result => {
                this.next({
                    type: 'auth',
                    payload: result.auth
                });

                const ws = new WebSocket(`ws://${environment.WS_URL}/ws`);

                ws.onmessage = msg => {
                    this.next(JSON.parse(msg.data));
                };

                ws.onerror = msg => {
                    throw msg;
                };

                ws.onopen = () => {
                    console.log('open');
                    this.ws$.next(ws);
                    this.sendAction('info', '');
                };
            });
    }

    get<T>(url: string): Observable<T> {
        return this.httpClient.request<T>('GET', url)
            .pipe(catchError(err => {
                console.log(err);

                return of<T>();
            }));
    }

    sendAction(type, payload) {
        this.ws$.subscribe(ws => {
            ws.send(JSON.stringify({type, payload}));
        })
    }
}