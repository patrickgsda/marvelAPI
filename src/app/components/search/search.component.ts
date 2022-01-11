import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../service/characters.service'
import { Character } from '../characters/card-character/characters.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public name: string = ''
  searchCharacters!: Character[];
  constructor(private charactersService: CharactersService ) { }

  ngOnInit(): void {
  }

  search(name: string): void {
    this.charactersService.searchCharacters(name)
    .subscribe(characters => this.searchCharacters = characters)
  }
}
