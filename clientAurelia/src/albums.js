import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient, Router)
export class Albums {
    heading = 'Albums';
    albums = [];

    constructor(http, router) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:8000/api/');
        });

        this.http = http;
        this.router = router;
    }

    activate() {
        console.log("Activating album list.")
        return loadAlbums();
    }

    loadAlbums() {
        return this.http.fetch('albums')
            .then(response => response.json())
            .then(albums => this.albums = albums);
    }

    deleteAlbum(album) {
        
        this.http.fetch('albums/' + album._id, { method: 'delete' })
          .then(() => loadAlbums());
        
    }

}