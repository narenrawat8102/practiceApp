import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
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

// Routing
const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
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
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
