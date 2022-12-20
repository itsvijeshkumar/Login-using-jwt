import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {ErrorComponent} from "./components/error/error.component";
import {ListTodosComponent} from "./components/list-todos/list-todos.component";
import {RouteGuardService} from "./services/route-guard.service";

// Welcome to Route
const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home/:name', component: HomeComponent, canActivate: [RouteGuardService]}, //canActivate, RouteGuardService
    {path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService]},
    {path: '**', component: ErrorComponent}
];

@NgModule({ //<!-- NgModule means Angular Module -->
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
