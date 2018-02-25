import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SystemsPage } from './systems';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    SystemsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SystemsPage),
  ],
})
export class SystemsPageModule {}
