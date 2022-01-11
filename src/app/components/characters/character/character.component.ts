import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../service/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  char!: any;

  constructor(private charactersService: CharactersService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.charactersService.characterById(this.route.snapshot.params['id'])
    .subscribe(characters => this.char = characters[0])
    }

    console(person: any) {
      console.log(person)
    }
}
