import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CardCharacterComponent } from './components/characters/card-character/card-character.component';
import { CharactersService } from './service/characters.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/characters/character/character.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterSearchedComponent } from './components/search/character-searched/character-searched.component'
import { AppRoutingModule } from './app-routing.module';
import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    CardCharacterComponent,
    SearchComponent,
    HomeComponent,
    CharacterComponent,
    CharacterSearchedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    AppRoutingModule,
    NgProgressModule
  ],
  providers: [ CharactersService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
