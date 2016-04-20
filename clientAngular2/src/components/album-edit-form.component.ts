import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { Album } from '../models/album';
import { AlbumDetailServiceComponent } from '../services/album-detail-service.component';
import { AlbumEditFormServiceComponent } from '../services/album-edit-form-service.component';

@Component({
  selector: 'album-edit-form',
  templateUrl: 'src/pages/album-edit-form.component.html',
  providers: [
    AlbumDetailServiceComponent,
    AlbumEditFormServiceComponent
  ]
})

export class AlbumEditFormComponent implements OnInit {
  public currentAlbum: Album;
  public errorMessage: string;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _detailService: AlbumDetailServiceComponent,
    private _editService: AlbumEditFormServiceComponent
  ){}

  ngOnInit() {
    this._detailService.getAlbum(this._routeParams.get('id')).subscribe(
                     album => this.currentAlbum = album
                   );
  }

  editAlbum() {
    this._editService.editAlbum(this.currentAlbum)
    .subscribe(
      album => this.currentAlbum = album,
      error =>  this.errorMessage = <any>error,
      () => this._router.navigate(['AlbumDetail', {id: this.currentAlbum._id}])
    );
  }
}
