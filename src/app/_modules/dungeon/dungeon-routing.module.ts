import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from 'src/app/_services/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { DungeonComponent } from './dungeon.component';
import { DragonsComponent } from '../dragons/dragons.component';
import { DragonShoutsComponent } from '../dragons/dragon-shouts/dragon-shouts.component';
import { DragonSpecsComponent } from '../dragons/dragon-specs/dragon-specs.component';
import { DragonBirthComponent } from '../dragons/dragon-birth/dragon-birth.component';

const routes: Routes = [
  {
    path: 'dungeon',
    component: DungeonComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dragons',
        component: DragonsComponent,
        children: [
          {
            path: 'dragon-shouts',
            component: DragonShoutsComponent
          },
          {
            path: 'dragon-specs',
            component: DragonSpecsComponent
          },
          {
            path: 'dragon-birth',
            component: DragonBirthComponent
          },

        ]
      }
    ]
  },
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
