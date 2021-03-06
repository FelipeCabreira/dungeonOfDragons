import { Component, OnInit } from '@angular/core';
import { DragonList, DragonState, LocateDungeon } from 'src/app/_state/general/general.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_state/initial';
import { Router } from '@angular/router';
import * as bulmaToast from "bulma-toast";

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit {

  constructor(private _store: Store<AppState>, private _route: Router) { }

  ngOnInit() {
    this._store.dispatch(new LocateDungeon(false));
    this._store.dispatch(new DragonList());
  }

}
