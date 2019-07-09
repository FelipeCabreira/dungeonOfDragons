import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/_state/initial';
import { selectDragonsState, selectDragonsList, selectDragonID } from 'src/app/_state/general/general.selectors';
import { DragonModel } from 'src/app/_models/dragon.model';

@Component({
  selector: 'app-dragon-specs',
  templateUrl: './dragon-specs.component.html',
  styleUrls: ['./dragon-specs.component.scss']
})
export class DragonSpecsComponent implements OnInit {
  public specsForm: FormGroup;
  public dragonSpec: DragonModel;
  public dragonID: number;
  public dragon: DragonModel;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.specsForm = this._formBuilder.group({
      createAt: [{ value: '', disabled: true }],
      name: [{ value: '', disabled: true }],
      type: [{ value: '', disabled: true }],
    });

    this._store.select(selectDragonID).subscribe(
      selectDragon => {
        if (selectDragon !== undefined && selectDragon !== null) {
          this.dragonID = selectDragon;
        }
      }
    );

    this._store.select(selectDragonsState).subscribe(
      dragonState => {
        if (dragonState !== undefined && dragonState !== null) {
          Object.values(dragonState).map(
            res => {
              if (res === this.dragonID) {
                this.dragon = dragonState;
                this.formUpdate(this.dragon);
              }
            }
          );
        }
      }
    );
  }

  returnToDungeon() {
    this._router.navigate(['./dungeon/dragon-shouts']);
  }

  formUpdate(form: DragonModel) {
    this.specsForm.setValue({
      name: form.name,
      createAt: form.createdAt,
      type: form.type
    });
  }

}
