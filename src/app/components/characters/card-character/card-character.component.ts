import { Component, Input, OnInit } from '@angular/core';
import { Character } from './characters.model';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.css']
})
export class CardCharacterComponent implements OnInit {

  @Input() cardCharacter!: Character;
  constructor() { }

  ngOnInit() {
  }
}
