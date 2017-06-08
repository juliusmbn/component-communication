import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MasterComponentComponent } from './master-component/master-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { SlaveComponent } from './slave/slave.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponentComponent,
    ChildComponentComponent,
    SlaveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
