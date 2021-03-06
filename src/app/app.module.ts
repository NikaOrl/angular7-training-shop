import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';
import { TimingInterceptor } from './core/interceptors/timing-interceptor.interceptor';

@NgModule({
  declarations: [AppComponent, ContactUsComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    CartModule,
    ProductsModule,
    CoreModule,
    OrdersModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
