import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/_state/initial';
import { Store } from '@ngrx/store';
import { DragonList } from 'src/app/_state/general/general.actions';
import { selectDragonsList } from 'src/app/_state/general/general.selectors';
import { DragonModel } from 'src/app/_models/dragon.model';
import { DragonTableModel } from 'src/app/_models/dragon-table.model';
import { Router } from '@angular/router';

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
    this._store.select(selectDragonsList).subscribe(
      dragon => {
        if (dragon !== undefined && dragon !== null) {
          this.dragonSpec = dragon;
          console.log(this.dragonSpec);
        }
      }
    );
  }


  changeInfoDragon(dragonSpec) {
    console.log(dragonSpec.id);
    alert('test');
  }
  
  
  killDragon(dragonSpec) {
    console.log(dragonSpec.id);
    alert('delete');
  }

}
