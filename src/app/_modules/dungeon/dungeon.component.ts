import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.scss']
})
export class DungeonComponent implements OnInit {
  public atDungeon: boolean;
  constructor(private _route: Router) { }

  ngOnInit() {
    this.atDungeon = true;
  }

  callDragons(){
    this.atDungeon = false;
    this._route.navigate(['/dungeon/dragons']);
  }
}
