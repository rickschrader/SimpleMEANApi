import { Album } from './album';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService {
    
    constructor(private http: Http) { }
    
    private albumsUrl: string = 'http://localhost:8000/api/albums/';

    getAlbums(): Observable<Album[]> {        
        return this.http.get(this.albumsUrl)
            .map(res => <Album[]> res.json())
            .catch(this.handleError);
    }

    getAlbum(id: String): Observable<Album>  {        
        return this.http.get(this.albumsUrl + id)
            .map(res => <Album> res.json())
            .catch(this.handleError);
    }
    
    addAlbum(album: Album) : Observable<Album>  {
        let body = JSON.stringify(album);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.albumsUrl, body, options)
                        .map(res => <Album> res.json())
                        .catch(this.handleError);
    }
    
    updateAlbum(album: Album) : Observable<Album>  {
        let body = JSON.stringify(album);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.albumsUrl + album._id, body, options)
                        .map(res => <Album> res.json())
                        .catch(this.handleError);
    }
        
    deleteAlbum(id: String): Observable<Album>  {
        return this.http.delete(this.albumsUrl + id)
                        .map(res => res.json())
                        .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}