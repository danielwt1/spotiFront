import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/album/albums/albums.component';
import { SidebarComponent } from './components/global/sidebar/sidebar.component';
import { httpInterceptorProviders } from './httpInterceptors';
import { TopbarComponent } from './components/global/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
