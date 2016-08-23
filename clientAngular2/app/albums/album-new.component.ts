import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Album } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-new',
  templateUrl: 'app/albums/album-form.component.html',
  styleUrls: ['app/albums/album-form.component.css']
})
export class AlbumNewComponent implements OnInit {
    album: Album;
    heading: String = "Add Album";

    constructor(
        private albumService: AlbumService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit(): void {
        this.album = { _id: null, title:'', artist:'' };
    }

    save(album: Album): void {
        
        this.albumService.addAlbum(album).subscribe(
            album => {
                this.router.navigate(['/albums']);
            },
            error => console.error(<any>error)
        )
    }

}