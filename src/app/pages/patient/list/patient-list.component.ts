
import { FbBaseService } from './../../../services/fb-base.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/shared/models/models/patient.model';
import { MatDialog } from '@angular/material/dialog';
import { PatientAddComponent } from '../add/patient-add.component';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  title = 'Patients';
  list: Observable<Patient[]> | null = null;


  constructor(private service: FbBaseService<Patient>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.list = this.service.get('patients');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PatientAddComponent, {});
    dialogRef.afterClosed().subscribe((result: Patient) => {
      if (result?.name) {
        this.service.add('patients', result);
      }
    }, err => {console.warn(err); });
  }

}