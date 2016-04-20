///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import { Injectable } from 'angular2/core';
import {Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Album }    from '../models/album';

@Injectable()
export class AlbumDeleteServiceComponent {
  public currentAlbum: Album;
  public errorMessage: string;

  constructor(
    private http: Http
  ) {}

  private _albumsUrl: string = 'http://localhost:8000/api/albums/';

  deleteAlbum (id: string): Observable<Album>  {
    this._albumsUrl += id;

    return this.http.delete(this._albumsUrl)
                    .map(res => res.json())
                    .catch(this._handleError);
  }

  private _handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
