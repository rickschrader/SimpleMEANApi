import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent }      from './albums/albums.component';
import { AlbumDetailComponent }  from './albums/album-detail.component';
import { AlbumNewComponent }  from './albums/album-new.component';
import { AlbumEditComponent }  from './albums/album-edit.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'albums/new',
    component: AlbumNewComponent
  },
  {
    path: 'albums/edit/:id',
    component: AlbumEditComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
