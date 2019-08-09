import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StatListComponent } from './stat-list/stat-list.component';
import { StatService } from './service/stat.service';
 
@NgModule({
  declarations: [
    AppComponent,
    StatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StatService],
  bootstrap: [AppComponent]
})
export class AppModule { }