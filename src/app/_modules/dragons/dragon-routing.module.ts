import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_services/auth.guard';
import { DragonsComponent } from './dragons.component';

const dragonPath: Routes = [
  {
    path: 'dragons',
    component: DragonsComponent,
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(dragonPath),
    CommonModule
  ]
})
export class DragonRoutingModule { }
