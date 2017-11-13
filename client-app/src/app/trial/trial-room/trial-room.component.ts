import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { LogicService } from '../service/logic.service';
@Component({
  selector: 'app-trial-room',
  templateUrl: './trial-room.component.html',
  styleUrls: ['./trial-room.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrialRoomComponent implements OnInit {
  stories: Observable<any[]>;
  result: Observable<any>;
  kb: string;
  constructor(db: AngularFireDatabase, private _logicService: LogicService) {
    this.stories = db.list('stories').valueChanges();
    // tslint:disable-next-line:max-line-length
    const kb = 'A & ~B & C & (A | ~D) & (~E | ~D) & (C | ~D) & (~A | ~F) & (E | ~F) & (~D | ~F) & (B | ~C | D) & (A | ~E | F) & (~A | E | D)';
    this.kb = kb;
    this.result = this._logicService.dpllsatisfiable(kb);
  }
  getResult() {
    this.result = this._logicService.dpllsatisfiable(this.kb);
  }
  ngOnInit() {
  }
}
