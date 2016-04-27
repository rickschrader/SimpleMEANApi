import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';
 
@inject(HttpClient, Router)
export class albumNew{
    album = {_id: null, title: '', artist: '' };
  
    constructor(http, router){
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:8000/api/');
        });
 
        this.http = http;
        this.router = router;
    }
 
    addAlbum() {
        
        console.log('Album data to add: ' + JSON.stringify(this.album));
        
        this.http.fetch('albums/', {
                method: 'post',
                body: json(this.album)
            })
          .then(response => response.json())
          .then(album => this.album = album)
          .then(() => this.router.navigate("albums"));
    }
}
