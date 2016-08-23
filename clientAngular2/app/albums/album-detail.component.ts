import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Album } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-detail',
  templateUrl: 'app/albums/album-detail.component.html',
  styleUrls: ['app/albums/album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
    album: Album;

    constructor(
        private albumService: AlbumService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id: string = params['id'];
            
            this.albumService.getAlbum(id).subscribe(
                album => this.album = album,
                error =>  console.error(<any>error)
            );
        });
    }

    editAlbum(id: String): void {
        this.router.navigate(['/albums/edit', id]);
    }
    
    deleteAlbum(id: String): void {
        this.albumService.deleteAlbum(id).subscribe(
            album => {
                this.router.navigate(['/albums']);
            },
            error => console.error(<any>error)
        )
        
        //Could navigate to a confirmation route here instead
        //this.router.navigate(['/albums/:id/delete', id]);
    }
}