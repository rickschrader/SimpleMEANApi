import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Album } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-edit',
  templateUrl: 'app/albums/album-form.component.html',
  styleUrls: ['app/albums/album-form.component.css']
})
export class AlbumEditComponent implements OnInit {
    album: Album;
    heading: String = "Edit Album";

    constructor(
        private albumService: AlbumService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit(): void {
        //Placeholder while actual album is loaded
        this.album = { _id: null, title:'', artist:'' };

        this.route.params.forEach((params: Params) => {
            let id: string = params['id'];
            
            this.albumService.getAlbum(id).subscribe(
                album => this.album = album,
                error =>  console.error(<any>error)
            );
        });
    }

    save(album: Album): void {
        
        this.albumService.updateAlbum(album).subscribe(
            album => {
                this.router.navigate(['/albums', this.album._id]);
            },
            error => console.error(<any>error)
        )
    }

}