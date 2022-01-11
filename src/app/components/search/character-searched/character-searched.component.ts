import { Component, OnInit } from '@angular/core';
import {CharactersService } from '../../../service/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-searched',
  templateUrl: './character-searched.component.html',
  styleUrls: ['./character-searched.component.css']
})
export class CharacterSearchedComponent implements OnInit {
  char: any;

  constructor(private charactersService: CharactersService,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.charactersService.searchCharacters(this.route.snapshot.params['name'])
    .subscribe(characters => this.char = characters[0])
  }

}
