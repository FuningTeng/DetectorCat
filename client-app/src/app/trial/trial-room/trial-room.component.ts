import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-trial-room',
  templateUrl: './trial-room.component.html',
  styleUrls: ['./trial-room.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrialRoomComponent implements OnInit {
  stories: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.stories = db.list('stories').valueChanges();
  }

  ngOnInit() {
  }
}
