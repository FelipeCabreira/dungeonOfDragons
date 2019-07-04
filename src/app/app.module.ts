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
import { DragonRoutingModule } from './_modules/dragons/dragon-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DungeonComponent,
    DragonsComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragonRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
