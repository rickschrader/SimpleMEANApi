import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';
 
@inject(HttpClient, Router)
export class albumEdit{
    album = '';
  
    constructor(http, router){
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:8000/api/');
        });
 
        this.http = http;
        this.router = router;
    }
 
    activate(params) {
        return this.http.fetch('albums/' + params.id)
          .then(response => response.json())
          .then(album => this.album = album);
    }

    updateAlbum() {
        
        console.log('Album data to update: ' + JSON.stringify(this.album));
        
        this.http.fetch('albums/' + this.album._id, {
                method: 'put',
                body: json(this.album)
            })
          .then(response => response.json())
          .then(album => this.album = album)
          .then(() => this.router.navigate("albums"));
    }
}

