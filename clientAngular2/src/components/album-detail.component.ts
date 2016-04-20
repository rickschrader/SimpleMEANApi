///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { AlbumEditFormComponent } from './album-edit-form.component';
import { AlbumDetailServiceComponent } from '../services/album-detail-service.component';
import { AlbumDeleteServiceComponent } from '../services/album-delete-service.component';

@Component({
  selector: 'album-detail',
  templateUrl: 'src/pages/album-detail.component.html',
  providers: [
    AlbumDetailServiceComponent,
    AlbumDeleteServiceComponent
  ],
  directives: [ ROUTER_DIRECTIVES, AlbumEditFormComponent ]
})

export class AlbumDetailComponent implements OnInit {
  public currentAlbum;
  public errorMessage: string;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _detailService: AlbumDetailServiceComponent,
    private _deleteService: AlbumDeleteServiceComponent
  ){}

  ngOnInit() {
    this._detailService.getAlbum(this._routeParams.get('id')).subscribe(
                     album => this.currentAlbum = album,
                     error =>  this.errorMessage = <any>error
                   );
  }

  deleteHandler(id: string) {
    this._deleteService.deleteAlbum(id).subscribe(
      album => this.currentAlbum = album,
      errorMessage => this.errorMessage = errorMessage,
      () => this._router.navigate(['AlbumList'])
    )
  }
}
