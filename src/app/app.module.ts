// Modules
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
// import { ProductModule } from './pages/products/product.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { LoginComponent } from './login/login.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

import { CardComponent } from './card/card.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';

// Pages Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';

// Subject & Subject's Components
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './subjectComponents/comp1/comp1.component';
import { Comp2Component } from './subjectComponents/comp2/comp2.component';
import { Comp3Component } from './subjectComponents/comp3/comp3.component';
import { Comp4Component } from './subjectComponents/comp4/comp4.component';
import { ViewChildComponent } from './subjectComponents/view-child/view-child.component';

// Services
import { MessageService } from './uxServices/message.service';

// Directives
import { TestDirectiveDirective } from './directives/test-directive.directive';

// Pipes
import { UxPipe } from './appPipes/ux.pipe';
import { FilterPipe } from './appPipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseComponent,
    NgForComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Card2Component,
    Card1Component,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    ViewChildComponent,
    TestDirectiveDirective,
    PipeComponent,
    UxPipe,
    FilterPipe,
    FormsComponent,
    ReactiveFormsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // ProductModule,
  ],

  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('App Module Loaded');
  }
}
