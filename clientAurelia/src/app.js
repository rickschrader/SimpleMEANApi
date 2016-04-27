export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','albums'],     name: 'albums',    moduleId: './albums',    nav: true, title:'Albums' },
      { route: 'albums/:id/view', name: 'albumView',    moduleId: './albumView',    nav: false, title:'Album Details' },
      { route: 'albums/new', name: 'albumNew',    moduleId: './albumNew',    nav: false, title:'New Album' }
    ]);

    this.router = router;
  }
}
