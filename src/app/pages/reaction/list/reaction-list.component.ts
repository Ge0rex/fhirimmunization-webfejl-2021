import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Reaction } from 'src/app/shared/models/models/reaction.model';
import { ReactionAddComponent } from '../add/reaction-add.component';

@Component({
  selector: 'app-reaction-list',
  templateUrl: './reaction-list.component.html',
  styleUrls: ['./reaction-list.component.scss']
})
export class ReactionListComponent implements OnInit {
  title = 'Reactions';
  list: Observable<Reaction[]> | null = null;

  constructor(private service: FbBaseService<Reaction>, private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.list = this.service.get('reactions');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReactionAddComponent, {});
    dialogRef.afterClosed().subscribe((result: Reaction) => {
      if (result?.detail) {
        this.service.add('reactions', result);
      }
    }, err => {console.warn(err); });
  }

}