///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import { Injectable } from 'angular2/core';
import {Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Album }    from '../models/album';

@Injectable()
export class AlbumDetailServiceComponent {
  constructor(private http: Http) { }

  private _albumsUrl: string = 'http://localhost:8000/api/albums/';

  getAlbum (id: string): Observable<Album>  {
    this._albumsUrl += id;

    this.http.get(this._albumsUrl).subscribe((res:Response) => console.debug(JSON.stringify(res)));
      
    return this.http.get(this._albumsUrl)
        .map(res => <Album> res.json())
                    .catch(this._handleError);
  }

  private _handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
