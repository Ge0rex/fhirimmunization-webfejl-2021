import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';
import { Reaction } from 'src/app/shared/models/models/reaction.model';
import { ReactionUpdateComponent } from '../update/reaction-update/reaction-update.component';






@Component({
  selector: 'app-reaction-card',
  templateUrl: './reaction-card.component.html',
  styleUrls: ['./reaction-card.component.scss']
})
export class ReactionCardComponent implements OnInit {
  @Input() reaction: Reaction = {} as any;
  @Input() hasAction = true;
  @Output() callReaction = new EventEmitter<Reaction>();
  constructor(private dialog: MatDialog, private service: FbBaseService<Reaction>,) { }

  ngOnInit(): void {
  }

  openDialogUpdateReaction(event: any): void {
    event.stopPropagation();
    this.callReaction.emit(this.reaction);
    const dialogRef = this.dialog.open(ReactionUpdateComponent, {});
    dialogRef.afterClosed().subscribe((result: Reaction) => {
      if (result?.detail) {
        this.service.update('reactions', result, this.reaction.id);
      }
    }, err => {console.warn(err); });
  }

  DeleteReaction(event: any): void {
    event.stopPropagation();
    this.callReaction.emit(this.reaction);
    this.service.delete('reactions', this.reaction.id);
  }



}
