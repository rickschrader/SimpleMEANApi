import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Album }    from '../models/album';

@Injectable()
export class AlbumEditFormServiceComponent {
  constructor(private http: Http) { }

  private _albumsUrl: string = 'http://localhost:8000/api/albums/';

  editAlbum (album: Album) : Observable<Album>  {
      this._albumsUrl += album._id;

    let body = JSON.stringify(album);
    //let body = JSON.stringify({ title: album.title });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

      console.debug(body);
     
   
    return this.http.put(this._albumsUrl, body, options)
                    .map(res =>  <Album> res.json())
                    .catch(this._handleError)
  }

  private _handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
