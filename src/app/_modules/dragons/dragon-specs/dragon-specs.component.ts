import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_state/initial';
import { selectDragonsState } from 'src/app/_state/general/general.selectors';
import { DragonModel } from 'src/app/_models/dragon.model';

@Component({
  selector: 'app-dragon-specs',
  templateUrl: './dragon-specs.component.html',
  styleUrls: ['./dragon-specs.component.scss']
})
export class DragonSpecsComponent implements OnInit {
  public specsForm: FormGroup;
  public dragonSpec: DragonModel;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.specsForm = this._formBuilder.group({
      createAt: [{ value: '', disabled: true },],
      name: [{ value: '', disabled: true }],
      type: [{ value: '', disabled: true }],
    });

    this._store.select(selectDragonsState).subscribe(
      dragonState => {
        if (dragonState !== undefined && dragonState !== null) {
          this.dragonSpec = dragonState;
          this.formUpdate(dragonState);
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
