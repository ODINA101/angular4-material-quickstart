import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'hammerjs';
import {MdRadioModule,MdSelectModule,MdSliderModule,MdSlideToggleModule} from '@angular/material';
import {MdMenuModule,MdSidenavModule,MdToolbarModule,MdListModule} from '@angular/material';
import {MdGridListModule,MdCardModule,MdTabsModule,MdButtonToggleModule} from '@angular/material';
import {MdChipsModule,MdIconModule,MdProgressSpinnerModule,MdProgressBarModule} from '@angular/material';
import {MdDialogModule,MdTooltipModule,MdSnackBarModule,MdTableModule} from '@angular/material';
import {MdSortModule,MdPaginatorModule} from '@angular/material';
import {MdDatepickerModule,MdButtonModule, MdCheckboxModule,MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[  [MdButtonModule,MdCheckboxModule,MdDatepickerModule,MdInputModule],
  [MdRadioModule,MdSelectModule,MdSliderModule,MdSlideToggleModule],
  [MdMenuModule,MdSidenavModule,MdToolbarModule,MdListModule],
  [MdGridListModule,MdCardModule,MdTabsModule,MdButtonToggleModule],
  [MdChipsModule,MdIconModule,MdProgressSpinnerModule,MdProgressBarModule],
  [MdDialogModule,MdTooltipModule,MdSnackBarModule,MdTableModule],
  [MdSortModule,MdPaginatorModule]],
  declarations: []
})
export class MaterialModule { }
