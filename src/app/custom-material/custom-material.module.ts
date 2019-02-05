import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    MatAutocompleteModule, MatInputModule
  ],
  exports: [
    MatAutocompleteModule, MatInputModule
  ]
})
export class CustomMaterialModule {
}