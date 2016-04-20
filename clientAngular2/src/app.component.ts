import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AlbumListComponent} from './components/list.component';
import {AlbumFormComponent} from './components/album-form.component';
import {AlbumDetailComponent} from './components/album-detail.component';
import {AlbumEditFormComponent} from './components/album-edit-form.component';

@Component({
    selector: 'my-app',
    templateUrl: 'src/pages/app.component.html',
    styleUrls: ['src/stylesheets/style.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS]
})

@RouteConfig([
    {
        path: '/albums',
        name: 'AlbumList',
        component: AlbumListComponent,
        useAsDefault: true
    },
    {
        path: '/albums/new',
        name: 'NewAlbum',
        component: AlbumFormComponent
    },
    {
        path: '/albums/:id',
        name: 'AlbumDetail',
        component: AlbumDetailComponent
    },
    {
        path: '/albums/:id/edit',
        name: 'EditAlbum',
        component: AlbumEditFormComponent
    }
])

export class AppComponent {
}
