import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DungeonComponent } from './_modules/dungeon/dungeon.component';
import { DragonsComponent } from './_modules/dragons/dragons.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './_modules/header/header.component';
import { FooterComponent } from './_modules/footer/footer.component';
import { MenuComponent } from './_modules/menu/menu.component';
import { DungeonRoutingModule } from './_modules/dungeon/dungeon-routing.module';
import { DragonShoutsComponent } from './_modules/dragons/dragon-shouts/dragon-shouts.component';
import { DragonSpecsComponent } from './_modules/dragons/dragon-specs/dragon-specs.component';
import { DragonBirthComponent } from './_modules/dragons/dragon-birth/dragon-birth.component';

@NgModule({
  declarations: [
    AppComponent,
    DungeonComponent,
    DragonsComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DragonShoutsComponent,
    DragonSpecsComponent,
    DragonBirthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DungeonRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
