// ANGULAR CORE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// EXTERNAL LIB
import { CookieService } from 'ngx-cookie-service';
import { TableModule } from 'primeng/table';
// COMPONENTS
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
// REDUX
import { environment } from 'src/environments/environment';
import { reducers } from './_state/initial';
import { clearState } from './_state/general/general.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { GeneralEffects } from './_state/general/general.effects';

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
    HttpClientModule,
    TableModule,
    DungeonRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers: [clearState] }),
    StoreDevtoolsModule.instrument({
      name: 'DungeonOfDragons',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([GeneralEffects]),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
