import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// @Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from './../../../environments/environment';
import {
  routerReducers,
  RouterStateSerializerProvider,
} from './router/router.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers),
    StoreRouterConnectingModule.forRoot(),

    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [RouterStateSerializerProvider],
})
export class CoreStoreModule {}
