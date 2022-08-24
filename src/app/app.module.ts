// Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
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
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';

// Products Components
import { LaptopComponent } from './pages/products/laptop/laptop.component';
import { MobileComponent } from './pages/products/mobile/mobile.component';
import { TelevisionComponent } from './pages/products/television/television.component';
import { WashingMachineComponent } from './pages/products/washing-machine/washing-machine.component';

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

// Routing
const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  // Nested Routing of Products Page
  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'television', component: TelevisionComponent },
      { path: 'washing-machine', component: WashingMachineComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'buy-products', component: ParentComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'reactiveForms', component: ReactiveFormsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseComponent,
    NgForComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    WashingMachineComponent,
    TelevisionComponent,
    MobileComponent,
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
    RouterModule.forRoot(appRoutes),
  ],

  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
