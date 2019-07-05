import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from 'src/app/_services/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { DungeonComponent } from './dungeon.component';
import { DragonsComponent } from '../dragons/dragons.component';
import { DragonShoutsComponent } from '../dragons/dragon-shouts/dragon-shouts.component';

const routes: Routes = [
  {
    path: 'dungeon',
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dragons',
        component: DragonsComponent,
        children: [
          {
            path: 'dragon-shouts',
            component: DragonShoutsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class DungeonRoutingModule { }