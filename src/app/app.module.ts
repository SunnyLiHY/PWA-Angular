import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        // 注册Service Worker
        ServiceWorkerModule.register('ngsw-config.json', {enabled: environment.production})
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
