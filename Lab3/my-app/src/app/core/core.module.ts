import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PanelComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    HeaderComponent,FooterComponent,PanelComponent
  ]
})
export class CoreModule { }
