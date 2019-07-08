import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AppState } from 'src/app/_state/initial';
import { Store } from '@ngrx/store';
import * as bulmaToast from "bulma-toast";
import { DragonSave, DragonDelete, DragonList, DragonUpdate } from 'src/app/_state/general/general.actions';
import { selectDragonsState, selectDragonsList } from 'src/app/_state/general/general.selectors';
import { DragonModel } from 'src/app/_models/dragon.model';

@Component({
  selector: 'app-dragon-birth',
  templateUrl: './dragon-birth.component.html',
  styleUrls: ['./dragon-birth.component.scss']
})
export class DragonBirthComponent implements OnInit {
  public birthForm: FormGroup;
  public update: boolean;
  public dragonID: number;
  public dragonInfo: DragonModel;


  constructor(
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>,
    private _router: Router
  ) { }

  ngOnInit() {
    this.update = false;

    this.birthForm = this._formBuilder.group({
      createAt: [{ value: '', disabled: true },],
      name: ['', Validators.required],
      type: ['', Validators.required],
    });

    this._store.select(selectDragonsState).subscribe(
      dragonState => {
        if (dragonState !== undefined && dragonState !== null) {
          this.dragonInfo = dragonState;
          if (dragonState.id !== undefined && dragonState.id !== null) {
            this.update = true;
            this.formUpdate(dragonState);
          }
        }
      }
    );

    this._store.select(selectDragonsList).subscribe(
      dragonList => {
        if (dragonList !== undefined && dragonList !== null) {
          this.dragonID = dragonList.id;
        }
      }
    );
  }


  saveDragon() {
    if (this.birthForm.valid) {
      const dragonValue = this.birthForm.value;
      this._store.dispatch(new DragonSave(dragonValue));
      this.notifier('Dragon Info Send', 'is-success', 'right');
      this._store.dispatch(new DragonList());
    } else {
      this.notifier('Ops, Something went wrong !', 'is-danger', 'right');
      return;
    }
  }



  deleteDragon(dragon: DragonModel) {
    const dragonValue = dragon;
    dragonValue.id = this.dragonID;
    if (this.birthForm.valid && dragonValue.id !== undefined && dragonValue.id !== null) {
      this._store.dispatch(new DragonDelete(dragonValue.id));
      this.notifier('KILL WITH FIRE!, Wait... !', 'is-success', 'right');
      this._store.dispatch(new DragonList());
    } else {
      this.notifier('Ops, Something went wrong !', 'is-danger', 'right');
      return;
    }
  }


  updateDragon(dragon: DragonModel) {
    const dragonValue = dragon;
    dragonValue.id = this.dragonID;
    if (this.birthForm.valid && dragonValue.id !== undefined && dragonValue.id !== null) {
      this._store.dispatch(new DragonUpdate(dragonValue));
      this.notifier('GET NEW GEAR TO THIS DRAGON ! !', 'is-success', 'right');
      this._store.dispatch(new DragonList());
    } else {
      this.notifier('Ops, Something went wrong ! !', 'is-danger', 'right');
      return;
    }
  }

  returnToDungeon() {
    this._router.navigate(['./dungeon/dragon-shouts']);
  }

  notifier(msg, type, position) {
    bulmaToast.toast({
      message: msg,
      type: type,
      position: "top-" + position,
      closeOnClick: true,
    });
  }


  formUpdate(form: DragonModel) {
    this.birthForm.setValue({
      name: form.name,
      createAt: form.createdAt,
      type: form.type
    });
  }

}
