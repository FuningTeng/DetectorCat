import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrialRoomComponent } from './trial/trial-room/trial-room.component';

const routes: Routes = [
    { path: '', redirectTo: '/trial-room', pathMatch: 'full' },
    { path: 'trial-room', component: TrialRoomComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
