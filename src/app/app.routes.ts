import { Routes } from '@angular/router'
import { CharacterComponent } from './components/characters/character/character.component'
import { CharactersComponent } from './components/characters/characters.component'
import { HomeComponent } from './components/home/home.component'
import { CharacterSearchedComponent } from './components/search/character-searched/character-searched.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'personagens', component: CharactersComponent},
  {path: 'personagens/:id', component: CharacterComponent},
  {path: 'personagens/pesquisa/:name', component: CharacterSearchedComponent},
]
