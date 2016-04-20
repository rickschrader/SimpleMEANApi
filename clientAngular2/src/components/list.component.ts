///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { Album } from '../models/album';
import { AlbumListServiceComponent } from '../services/album-list-service.component';

@Component({
  selector: 'album-list',
  templateUrl: 'src/pages/album-list.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [AlbumListServiceComponent]
})

export class AlbumListComponent implements OnInit {
  public albums: Album[];
  public errorMessage: string;

  constructor(
    private _listingService: AlbumListServiceComponent
  ){}

  ngOnInit() {
    this._listingService.getAlbums().subscribe(
                     albums => this.albums = albums,
                     error =>  this.errorMessage = <any>error
                   );
  }
}
