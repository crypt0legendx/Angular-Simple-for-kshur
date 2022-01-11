import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { BeginningComponent } from './beginning/beginning.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: TableComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
