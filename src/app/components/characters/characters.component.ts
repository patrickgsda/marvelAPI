import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../service/characters.service';
import { Character } from './card-character/characters.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters!: Character[];

  constructor(private charactersService: CharactersService ) { }

  ngOnInit() {
    this.charactersService.characters()
    .subscribe(characters => this.characters = characters)
    }
  }
