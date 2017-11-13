import { LogicService } from './service/logic.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { TrialRoomComponent } from './trial-room/trial-room.component';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule
  ],
  declarations: [TrialRoomComponent],
  providers: [LogicService],
})
export class TrialModule { }
