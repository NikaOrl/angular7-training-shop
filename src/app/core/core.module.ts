import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';
import { CoreStoreModule } from './+store/core-store.module';

@NgModule({
  declarations: [PathNotFoundComponent],
  imports: [CommonModule, CoreStoreModule],
  exports: [PathNotFoundComponent],
})
export class CoreModule {}
