import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DungeonComponent } from './_modules/dungeon/dungeon.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dungeon',
  //   pathMatch: 'full',
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
