export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','albums'],     name: 'albums',    moduleId: './albums/albums',    nav: true, title:'Albums' },
      { route: 'albums/:id/view', name: 'albumView',    moduleId: './albums/albumView',    nav: false, title:'Album Details' },
      { route: 'albums/new', name: 'albumNew',    moduleId: './albums/albumNew',    nav: false, title:'New Album' },
      { route: 'albums/:id/edit', name: 'albumEdit',    moduleId: './albums/albumEdit',    nav: false, title:'Edit Album' }
    ]);

    this.router = router;
  }
}
