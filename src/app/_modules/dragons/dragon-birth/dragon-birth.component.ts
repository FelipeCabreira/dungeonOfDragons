import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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


  constructor(
    private _route: Router,
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>,
    ) { }

  ngOnInit() {
    this.birthForm = this._formBuilder.group({
      createAt: [],
      name: ['', Validators.required],
      type: ['', Validators.required],
    });
    bulmaToast.toast({})
    //   bulmaToast.toast({
  //     message: "FUUUS RO DAAAAH !!!!",
  //     type: "is-success",
  //     position: "top-right",
  //     closeOnClick: true,
  //   });
  }

}
