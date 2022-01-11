import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/components/shared/shared.module';
import { HomeComponent } from './home.component';
import { BeginningComponent } from './beginning/beginning.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { TableComponent } from './table/table.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    BeginningComponent,
    NavbarComponent,
    ContactComponent,
    TableComponent,
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
