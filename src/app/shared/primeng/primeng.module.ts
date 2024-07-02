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
import { CardModule } from 'primeng/card';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  exports: [
    RippleModule,
    ButtonModule,
    MenubarModule,
    SplitterModule,
    PanelModule,
    FieldsetModule,
    DividerModule,
    TabViewModule,
    ProgressBarModule,
    CardModule,
    AnimateOnScrollModule,
    ScrollPanelModule,
    DialogModule,
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    InputTextareaModule
  ]
})
export class PrimengModule { }
