import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuComponent } from './menu/side-menu/side-menu.component';
import { MainFormComponent } from './menu/forms/main-form/main-form.component';
import { DataBindingComponent } from './menu/data-binding/data-binding.component';
import { ParentComponent } from './menu/component-communication/parent/parent.component';
import { GuardExampleComponent } from './menu/guard-examples/guard-example/guard-example.component';
import { SecretPageComponent } from './menu/guard-examples/secret-page/secret-page.component';
import { DirectiveObservableComponent } from './menu/directive-observable/directive-observable.component';
import { AuthGuard } from './guards/auth.guard';
import { DialogGuard } from './guards/dialog.guard';

/*--------------------------- Routing Basics -----------------------------------------------------------
Each url represents a view in our app. A view consists of a (one or multiple) template and a respective component =>
Each url matches a component (that may include other child components).

There are three main elements that we use to configure routing in Angular:
    - Routes: is an object that we use in order to describe the routes of our application. 
    Notice below that 'path' specifies the URL, 'component' specifies respective component and 'redirectTo' option helps us redirect to another route. 
    To install our router into our app we use the RouterModule.forRoot() function (as shown).

    - RouterOutlet: is a directive/“placeholder” component that gets expanded to each route’s content. 
    It tells our router where to render the content of a route in the view. Whenever we switch routes, our content will be rendered in place of the router-outlet tag (replacing the existing route content).
    
    - RouterLink: is used when we want to navigate between routes.

*/

const routes: Routes = [
  {path: 'menu', children: [
	  {path: '', redirectTo: 'mainForm', pathMatch: 'full'},
    {path: 'dataBinding', component: DataBindingComponent},
    {path: 'communication', component: ParentComponent},
    {path: 'observables', component: DirectiveObservableComponent},
    {path: 'guards', component: GuardExampleComponent},
    {path: 'secret', component: SecretPageComponent, canActivate: [AuthGuard], canDeactivate: [DialogGuard]},
	  {path: 'mainForm', component: MainFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
