import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';
 
@inject(HttpClient)
export class AlbumView{
    album = '';
 
    constructor(http){
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:8000/api/');
        });
 
        this.http = http;
    }
 
    activate(params) {
        return this.http.fetch('albums/' + params.id)
          .then(response => response.json())
          .then(album => this.album = album);
    }
}