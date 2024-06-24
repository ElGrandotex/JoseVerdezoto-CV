import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [],
  imports: [
    RippleModule,
    ButtonModule,
    MenubarModule,
    SplitterModule,
    PanelModule,
    FieldsetModule,
    DividerModule,
    TabViewModule,
    ProgressBarModule
  ],
  exports: [
    RippleModule,
    ButtonModule,
    MenubarModule,
    SplitterModule,
    PanelModule,
    FieldsetModule,
    DividerModule,
    TabViewModule,
    ProgressBarModule
  ]
})
export class PrimengModule { }
