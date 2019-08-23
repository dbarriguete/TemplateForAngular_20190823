import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValidationSectionComponent } from './components/validation-section/validation-section.component';
import { InspiniaByDefaultComponent } from './components/inspinia-by-default/inspinia-by-default.component';
import { ValidationSectionOriginalStyleComponent } from './components/validation-section-original-style/validation-section-original-style.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationSectionComponent,
    InspiniaByDefaultComponent,
    ValidationSectionOriginalStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
