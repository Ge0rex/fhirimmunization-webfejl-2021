import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Performer } from 'src/app/shared/models/models/performer.model';
import { PerformerAddComponent } from '../add/performer-add.component';

@Component({
  selector: 'app-performer-list',
  templateUrl: './performer-list.component.html',
  styleUrls: ['./performer-list.component.scss']
})
export class PerformerListComponent implements OnInit {

  title = 'Performers';
  list: Observable<Performer[]> | null = null;

  constructor(private service: FbBaseService<Performer>, private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.list = this.service.get('performers');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PerformerAddComponent, {});
    dialogRef.afterClosed().subscribe((result: Performer) => {
      if (result?.actor) {
        this.service.add('performers', result);
      }
    }, err => {console.warn(err); });
  }
}
