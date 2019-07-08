import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_state/initial';
import { selectLocateDungeon } from 'src/app/_state/general/general.selectors';
import { LocateDungeon } from 'src/app/_state/general/general.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(
    private _route: Router,
    private _store: Store<AppState>,
  ) { }


  ngOnInit() {
  }


  callEntrance() {
    this._store.dispatch(new LocateDungeon(true));
    this._route.navigate(['./dungeon']);
  }

  logout(){
    this._route.navigate(['./login']);
  }

}
