import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Patient } from 'src/app/shared/models/models/patient.model';

@Component({
  selector: 'app-immunization-list',
  templateUrl: './immunization-list.component.html',
  styleUrls: ['./immunization-list.component.scss']
})
export class ImmunizationListComponent implements OnInit {

  title = 'Immunizations';
  list: Observable<Patient[]> | null = null;


  constructor(private service: FbBaseService<Patient>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.list = this.service.get('patients');
  }

}
