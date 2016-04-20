import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, Location, HashLocationStrategy } from 'angular2/router'; 
import 'rxjs/Rx';

import { AppComponent } from './app.component';

//The HashLocationStrategy is a way to allow browser URL route to actually work without 404
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
