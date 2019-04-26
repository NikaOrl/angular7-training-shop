import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';

@NgModule({
  declarations: [AppComponent, ContactUsComponent],
  imports: [BrowserModule, AppRoutingModule, CartModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
