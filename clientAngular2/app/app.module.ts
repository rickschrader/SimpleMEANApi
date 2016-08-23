import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { AlbumsComponent }      from './albums/albums.component';
import { AlbumDetailComponent }  from './albums/album-detail.component';
import { AlbumNewComponent }  from './albums/album-new.component';
import { AlbumEditComponent }  from './albums/album-edit.component';

import { AlbumService }  from './albums/album.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumNewComponent,
    AlbumEditComponent
  ],
  providers: [
    AlbumService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}