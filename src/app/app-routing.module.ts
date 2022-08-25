import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { FormsComponent } from 'src/app/pages/forms/forms.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { ReactiveFormsComponent } from 'src/app/pages/reactive-forms/reactive-forms.component';
import { ParentComponent } from 'src/app/parent/parent.component';
import { SubjectComponent } from 'src/app/subject/subject.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },

  // For Lazy Loading of Products Module
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/product.module').then((m) => m.ProductModule),
  },
  { path: 'contact', component: ContactComponent },
  { path: 'buy-products', component: ParentComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'reactiveForms', component: ReactiveFormsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
