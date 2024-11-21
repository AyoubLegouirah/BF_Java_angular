import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {YugiResult} from '../../../shared/models/yugi.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YugiService {

  constructor(
    private _http: HttpClient,
  ) { }

  getCards(url: string): Observable<YugiResult> {
    return this._http.get<YugiResult>(url);
  }
}
