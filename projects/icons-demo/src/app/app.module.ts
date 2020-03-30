import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WqIconsModule, WqIconsService } from '../../../wq-icons/src/public-api';
import { wqIconCancel24Px } from '../../../wq-icons/icons-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WqIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private iconRegistry: WqIconsService) {
    this.iconRegistry.registerIcons([
      wqIconCancel24Px
    ]);
  }
}
