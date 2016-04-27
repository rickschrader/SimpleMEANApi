export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  name: 'welcome',  moduleId: './welcome',  nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',    moduleId: './users',    nav: true, title:'Github Users' },
      { route: 'albums',         name: 'albums',    moduleId: './albums',    nav: true, title:'Albums' }
    ]);

    this.router = router;
  }
}