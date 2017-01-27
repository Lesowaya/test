import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';

import { AppComponent }  from './app.component';
import { ItemComponent }  from './item.component';
import {UserService} from './data.service';
import {FormComponent} from './form.component';
import {SimpleHTTPComponent} from './request.component';
import { HttpModule } from '@angular/http';

// const routes: Routes = [
//     {path: '', redirectTo: 'home', pathMatch: 'full'},
//     {path: 'home', component: AppComponent},
//     {path: 'about', component: FormComponent},
//     {path: 'contact/: id', component: FormComponent},
//     {path: 'contactus', redirectTo: 'contact'},
// ];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        //RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ItemComponent,
        FormComponent,
        SimpleHTTPComponent
    ],
    providers: [
        UserService,
        // { provide: LocationStrategy, useClass: HashLocationStrategy },
        // { provide: APP_BASE_HREF, useValue: '/' }
    ],

    bootstrap: [ AppComponent ]
})
export class AppModule { }