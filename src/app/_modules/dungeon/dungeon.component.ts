import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.scss']
})
export class DungeonComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  dragons(){
    this._route.navigate(['/dungeon/dragons']);
  }
}
