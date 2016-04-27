import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Albums {
  heading = 'Albums';
  albums = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:8000/api/');
    });

    this.http = http;
    //this.myRouter = router;
  }

  activate() {
    return this.http.fetch('albums')
      .then(response => response.json())
      .then(albums => this.albums = albums);
  }
}