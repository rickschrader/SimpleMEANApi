///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Album }    from '../models/album';

@Injectable()
export class AlbumFormServiceComponent {
  constructor(private http: Http) { }

  private _albumsUrl: string = 'http://localhost:8000/api/albums/';

  addAlbum (album: Album) : Observable<Album>  {

    let body = JSON.stringify(album);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.debug(body);
      
    return this.http.post(this._albumsUrl, body, options)
                    .map(res =>  <Album> res.json())
                    .catch(this._handleError)
  }

  private _handleError (error: Response) {
    // Should probably be logging errors instead
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
