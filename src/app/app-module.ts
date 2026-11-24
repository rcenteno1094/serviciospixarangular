import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home-component/home-component';
import { NavBarComponent } from './components/nav-bar-component/nav-bar-component';
import { provideHttpClient } from '@angular/common/http';
import { ServicePixars } from './services/service.pixar';
import { CreatePixarComponent } from './components/create-pixar-component/create-pixar-component';

@NgModule({
  declarations: [App, HomeComponent, NavBarComponent, CreatePixarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServicePixars],
  bootstrap: [App],
})
export class AppModule {}
