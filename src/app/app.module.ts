import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Pages Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

// Products Components
import { LaptopComponent } from './pages/products/laptop/laptop.component';
import { WashingMachineComponent } from './pages/products/washing-machine/washing-machine.component';
import { TelevisionComponent } from './pages/products/television/television.component';
import { MobileComponent } from './pages/products/mobile/mobile.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Card2Component } from './card2/card2.component';
import { Card1Component } from './card1/card1.component';

// Suject & Subject Components
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './subjectComponents/comp1/comp1.component';
import { Comp2Component } from './subjectComponents/comp2/comp2.component';
import { Comp3Component } from './subjectComponents/comp3/comp3.component';
import { Comp4Component } from './subjectComponents/comp4/comp4.component';
import { ViewChildComponent } from './subjectComponents/view-child/view-child.component';

// Services
import { MessageService } from './uxServices/message.service';
import { TestDirectiveDirective } from './directives/test-directive.directive';
import { PipeComponent } from './pipe/pipe.component';

// Pipes
import { UxPipe } from './appPipes/ux.pipe';

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
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],

  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
