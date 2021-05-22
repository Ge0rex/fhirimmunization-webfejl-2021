import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/shared/models/models/patient.model';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';
import { PatientUpdateComponent } from '../../update/patient-update.component';






@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {
  @Input() patient: Patient = {} as any;
  @Input() hasAction = true;
  @Output() callImmunizationing = new EventEmitter<Patient>();
  @Output() getPatient = new EventEmitter<Patient>();
  constructor(private dialog: MatDialog, private service: FbBaseService<Patient>,) { }

  ngOnInit(): void {
  }

  toggleImmunizationing(event: any): void{
    event.stopPropagation();
    this.patient.immunizationing = !this.patient.immunizationing;
    this.callImmunizationing.emit(this.patient);
  }

  
  openDialogUpdatePatient(event: any): void {
    event.stopPropagation();
    this.callImmunizationing.emit(this.patient);
    const dialogRef = this.dialog.open(PatientUpdateComponent, {});
    dialogRef.afterClosed().subscribe((result: Patient) => {
      if (result?.name) {
        this.service.update('patients', result, this.patient.id);
      }
    }, err => {console.warn(err); });
  }

  DeletePatient(event: any): void {
    event.stopPropagation();
    this.callImmunizationing.emit(this.patient);
    this.service.delete('patients', this.patient.id);
  }



}
