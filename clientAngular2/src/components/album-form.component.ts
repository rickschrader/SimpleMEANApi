import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';
import { Router } from 'angular2/router';

import { Album }    from '../models/album';
import { AlbumFormServiceComponent } from '../services/album-form-service.component';

@Component({
  selector: 'album-form',
  templateUrl: 'src/pages/album-form.component.html',
  providers: [AlbumFormServiceComponent]
})

export class AlbumFormComponent {
  constructor(
    private _router: Router,
    private _albumService: AlbumFormServiceComponent
  ){}

  public model: Album = {_id: null, title: '', artist: '' };
  public errorMessage: string;

  newAlbum() {
    this._albumService.addAlbum(this.model)
      .subscribe(
        album => this.model = album,
        error =>  this.errorMessage = <any>error,
        () => this._router.navigate(['AlbumList'])
      );
  }

}
