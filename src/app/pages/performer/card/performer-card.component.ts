import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Performer } from 'src/app/shared/models/models/performer.model';
import { PerformerUpdateComponent } from '../update/performer-update.component';

@Component({
  selector: 'app-performer-card',
  templateUrl: './performer-card.component.html',
  styleUrls: ['./performer-card.component.scss']
})
export class PerformerCardComponent implements OnInit {
  @Input() performer: Performer = {} as any;
  @Input() hasAction = true;
  @Output() callPerformer = new EventEmitter<Performer>();
  constructor(private dialog: MatDialog, private service: FbBaseService<Performer>,) { }

  ngOnInit(): void {
  }

  openDialogUpdatePerformer(event: any): void {
    event.stopPropagation();
    this.callPerformer.emit(this.performer);
    const dialogRef = this.dialog.open(PerformerUpdateComponent, {});
    dialogRef.afterClosed().subscribe((result: Performer) => {
      if (result?.actor) {
        this.service.update('performers', result, this.performer.id);
      }
    }, err => {console.warn(err); });
  }

  DeletePerformer(event: any): void {
    event.stopPropagation();
    this.callPerformer.emit(this.performer);
    this.service.delete('performers', this.performer.id);
  }


}
