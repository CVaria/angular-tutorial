import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; //for reactive forms
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //for enabling animations
import { LayoutModule } from '@angular/cdk/layout'; //for angular material theme
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';//for routing configurations

import { AppComponent } from './app.component';

//our custom made components
import { ReactiveComponent } from './menu/forms/reactive/reactive.component';
import { TemplateDrivenComponent } from './menu/forms/template-driven/template-driven.component';
import { SideMenuComponent } from './menu/side-menu/side-menu.component';
import { MainFormComponent } from './menu/forms/main-form/main-form.component';
import { LengthValidatorDirective } from './validators-directives/length-validator.directive';
import { RegexValidatorDirective } from './validators-directives/regex-validator.directive';
import { DataBindingComponent } from './menu/data-binding/data-binding.component';
import { ParentComponent } from './menu/component-communication/parent/parent.component';
import { FirstChildComponent } from './menu/component-communication/first-child/first-child.component';
import { SecondChildComponent } from './menu/component-communication/second-child/second-child.component';
import { ThirdChildComponent } from './menu/component-communication/third-child/third-child.component';
import { DirectiveObservableComponent } from './menu/directive-observable/directive-observable.component';
import { HighlightDirective } from './validators-directives/highlight.directive';
import { GuardExampleComponent } from './menu/guard-examples/guard-example/guard-example.component';
import { SecretPageComponent } from './menu/guard-examples/secret-page/secret-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ReactiveComponent,
    TemplateDrivenComponent,
    MainFormComponent,
    LengthValidatorDirective,
    RegexValidatorDirective,
    DataBindingComponent,
    ParentComponent,
    FirstChildComponent,
    SecondChildComponent,
    ThirdChildComponent,
    DirectiveObservableComponent,
    HighlightDirective,
    GuardExampleComponent,
    SecretPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
