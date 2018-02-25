import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductBPage } from './product-b';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    ProductBPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProductBPage),
  ],
})
export class ProductBPageModule {}
