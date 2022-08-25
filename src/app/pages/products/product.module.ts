import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { TelevisionComponent } from './television/television.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';

const proRoutes = [
  { path: '', component: ProductsComponent },
  { path: 'laptop', component: LaptopComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'television', component: TelevisionComponent },
  { path: 'washing-machine', component: WashingMachineComponent },
];

@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    MobileComponent,
    TelevisionComponent,
    WashingMachineComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(proRoutes)],
  exports: [],
})
export class ProductModule {}
