import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_state/initial';
import { selectLocateDungeon } from 'src/app/_state/general/general.selectors';
import { LocateDungeon } from 'src/app/_state/general/general.actions';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.scss']
})
export class DungeonComponent implements OnInit {
  public atDungeon: boolean;
  constructor(
    private _route: Router,
    private _store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.atDungeon = true;
    this._store.dispatch(new LocateDungeon(true));
    this._store.select(selectLocateDungeon).subscribe(
      info => {
        if (info !== undefined && info !== null) {
          this.atDungeon = info;
        }
      }
    );
  }

  callDragons() {
    this.atDungeon = false;
    this._store.dispatch(new LocateDungeon(false));
    this._route.navigate(['/dungeon/dragons']);
  }
}
