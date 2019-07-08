import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/_state/initial';
import { Store } from '@ngrx/store';
import { DragonList, DragonDelete, DragonState } from 'src/app/_state/general/general.actions';
import { selectDragonsList } from 'src/app/_state/general/general.selectors';
import { DragonModel } from 'src/app/_models/dragon.model';
import { DragonTableModel } from 'src/app/_models/dragon-table.model';
import { Router } from '@angular/router';
import * as bulmaToast from "bulma-toast";

@Component({
  selector: 'app-dragon-shouts',
  templateUrl: './dragon-shouts.component.html',
  styleUrls: ['./dragon-shouts.component.scss']
})
export class DragonShoutsComponent implements OnInit {
  public dragonSpec: DragonModel;
  public cols: DragonTableModel[] = [{
    field: 'name',
    header: 'Dragon Name'
  }];


  constructor(
    private _store: Store<AppState>,
    private _route: Router,
  ) { }



  ngOnInit() {
    // getting info from redux
    this._store.dispatch(new DragonList());
    this._store.select(selectDragonsList).subscribe(
      dragon => {
        if (dragon !== undefined && dragon !== null) {
          this.dragonSpec = dragon;
          // console.log(this.dragonSpec);
        }
      }
    );
  }

  newDragon() {
    this._route.navigate(['/dungeon/dragon-birth']);
  }

  changeInfoDragon(dragonSpec) {
    this._store.dispatch(new DragonState(dragonSpec.id));
    this._route.navigate(['/dungeon/dragon-birth']);
  }


  killDragon(dragonSpec) {
    // dispatch action to remove
    if (dragonSpec !== undefined && dragonSpec !== null) {
      this.notifier('KILL WITH FIRE !, Wait...', 'is-success', 'right');
      this._store.dispatch(new DragonDelete(dragonSpec.id));
      this._store.dispatch(new DragonList());
    } else {
      this.notifier('Ops, Something went wrong !, Wait...', 'is-danger', 'right');
      this._store.dispatch(new DragonList());
      return;
    }
  }

  notifier(msg, type, position) {
    bulmaToast.toast({
      message: msg,
      type: type,
      position: "top-" + position,
      closeOnClick: true,
    });
  }

}
