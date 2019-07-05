import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/_state/initial';
import { Store } from '@ngrx/store';
import { DragonList } from 'src/app/_state/general/general.actions';
import { selectDragonsList } from 'src/app/_state/general/general.selectors';
import { DragonModel } from 'src/app/_models/dragon.model';

@Component({
  selector: 'app-dragon-shouts',
  templateUrl: './dragon-shouts.component.html',
  styleUrls: ['./dragon-shouts.component.scss']
})
export class DragonShoutsComponent implements OnInit {
  public dragonSpec: DragonModel;
  public column = [{
    field: 'name',
    header: ''
  }];


  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select(selectDragonsList).subscribe(
      dragon => {
        if (dragon !== undefined && dragon !== null) {
          this.dragonSpec = dragon;
          Object.values(this.dragonSpec);
          console.log(this.dragonSpec);
        }
      }
    );
  }

}
