import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewmeetingPage } from './newmeeting';

@NgModule({
  declarations: [
    NewmeetingPage,
  ],
  imports: [
    IonicPageModule.forChild(NewmeetingPage),
  ],
})
export class NewmeetingPageModule {}
