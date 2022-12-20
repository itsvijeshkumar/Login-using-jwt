import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {ErrorComponent} from './components/error/error.component';
import {ListTodosComponent} from './components/list-todos/list-todos.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavBarComponent} from './components/layout/nav-bar/nav-bar.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ErrorComponent,
        ListTodosComponent,
        NavBarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
