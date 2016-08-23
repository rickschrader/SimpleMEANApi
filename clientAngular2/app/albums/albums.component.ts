import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Album } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'albums',
  templateUrl: 'app/albums/albums.component.html',
  styleUrls:  ['app/albums/albums.component.css']
})
export class AlbumsComponent implements OnInit {
    albums: Album[];

    constructor(
        private router: Router,
        private albumService: AlbumService) { }

    ngOnInit(): void {
        this.albumService.getAlbums().subscribe(
                albums => this.albums = albums,
                error =>  console.log(<any>error)
           );
    }

    goToDetail(id: String): void {
        this.router.navigate(['/albums', id]);
    }
}
