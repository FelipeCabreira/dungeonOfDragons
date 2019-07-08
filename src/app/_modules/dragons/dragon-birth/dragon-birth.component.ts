import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AppState } from 'src/app/_state/initial';
import { Store } from '@ngrx/store';
import * as bulmaToast from "bulma-toast";

@Component({
  selector: 'app-dragon-birth',
  templateUrl: './dragon-birth.component.html',
  styleUrls: ['./dragon-birth.component.scss']
})
export class DragonBirthComponent implements OnInit {
  public birthForm: FormGroup;
  public update: boolean;


  constructor(
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>,
    private _router: Router
  ) { }

  ngOnInit() {
    this.update = false;
    this.verifyId();
    this.notifier('Chegou', 'is-success', 'right');

    this.birthForm = this._formBuilder.group({
      createAt: [{ value: '', disabled: true },],
      name: ['', Validators.required],
      type: ['', Validators.required],
    });


  }

  notifier(msg, type, position) {
    bulmaToast.toast({
      message: msg,
      type: type,
      position: "top-" + position
    });
  }

  verifyId() {
    this._route.paramMap.subscribe(
      (params) => {
        let data = params.get('id');
        if (data !== undefined && data !== null) {
          this.update = true;
        }
      }
    );
  }

  returnToDungeon() {
    this._router.navigate(['./dungeon/dragon-shouts']);
  }

  saveDragon() {
    this.notifier('A NEW DRAGON IS BORN !', 'is-success', 'right');
  }

  deleteDragon() {
    this.notifier('KILL WITH FIRE!, Wait... !', 'is-success', 'right');
  }

  updateDragon() {
    this.notifier('GET NEW GEAR TO THIS DRAGON ! !', 'is-success', 'right');
  }

}
