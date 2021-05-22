import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Patient } from 'src/app/shared/models/models/patient.model';
import { ImmunizationUpdateComponent } from '../update/immunization-update.component';

@Component({
  selector: 'app-immunization-card',
  templateUrl: './immunization-card.component.html',
  styleUrls: ['./immunization-card.component.scss']
})
export class ImmunizationCardComponent implements OnInit {
  @Input() patient: Patient = {} as any;
  @Input() hasAction = true;
  @Output() callImmunizationing = new EventEmitter<Patient>();
  @Output() getPatient = new EventEmitter<Patient>();
  constructor(private dialog: MatDialog, private service: FbBaseService<Patient>,) { }

  ngOnInit(): void {
  }

  openDialogUpdateImmunization(event: any): void {
    event.stopPropagation();
    this.callImmunizationing.emit(this.patient);
    const dialogRef = this.dialog.open(ImmunizationUpdateComponent, {});
    dialogRef.afterClosed().subscribe((result: Patient) => {
      if (result?.vaccinecode) {
        this.service.update('patients', result, this.patient.id);
      }
    }, err => {console.warn(err); });
  }


}
