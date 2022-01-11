import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  num: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  edit: string;
  delete: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {
    num: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
    edit: 'Edit',
    delete: 'Delete',
  },
  {
    num: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
    edit: 'Edit',
    delete: 'Delete',
  },
  {
    num: 9,
    email: 'tobias.funke@reqres.in',
    first_name: 'Tobias',
    last_name: 'Funke',
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
    edit: 'Edit',
    delete: 'Delete',
  },
  {
    num: 10,
    email: 'byron.fields@reqres.in',
    first_name: 'Byron',
    last_name: 'Fields',
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
    edit: 'Edit',
    delete: 'Delete',
  },
  {
    num: 11,
    email: 'george.edwards@reqres.in',
    first_name: 'George',
    last_name: 'Edwards',
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
    edit: 'Edit',
    delete: 'Delete',
  },
  {
    num: 12,
    email: 'rachel.howell@reqres.in',
    first_name: 'Rachel',
    last_name: 'Howell',
    avatar: 'https://reqres.in/img/faces/12-image.jpg',
    edit: 'Edit',
    delete: 'Delete',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'num',
    'avatar',
    'first_name',
    'last_name',
    'email',
    'edit',
    'delete',
  ];
  dataSource: any[] = [];

  constructor(private changeDetectorRefs: ChangeDetectorRef) {}

  refresh() {
    this.changeDetectorRefs.detectChanges();
  }
  editData(num: number): void {}

  deleteData(num: number): void {
    const idx = this.dataSource.findIndex((d: any) => num == d.num);
    console.log(idx);
    this.dataSource.splice(idx, 1);
    this.refresh();
  }
  ngOnInit(): void {
    this.dataSource = ELEMENT_DATA;
  }
}
