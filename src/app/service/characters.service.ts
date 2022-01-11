import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MARVEL_API_CHARACTERS } from "../app.api";
import { Character } from '../components/characters/card-character/characters.model';

@Injectable()
export class CharactersService {
  ts: string = "1641959378"
  apikey: string = "2fe8037773b9bef353ad12fc16f46d9f"
  hash: string = "233ef67a236a14c51c64bfef712628bc"
  arrayCharacters: any
  constructor(private http: HttpClient) {}

  characters(): Observable<Character[]> {
    return this.http.get(`${MARVEL_API_CHARACTERS}?ts=${this.ts}&apikey=${this.apikey}&hash=${this.hash}&limit=100`)
    .pipe(map((response: any) => response.data.results.map((result: any) =>
        this.arrayCharacters = {id: result.id, name: result.name,
                                  path: result.thumbnail.path = result.thumbnail.path + "/portrait_uncanny." + result.thumbnail.extension,
                                    comics: result.comics.items}
        )))
  }
  searchCharacters(name: string): Observable<Character[]> {
    return this.http.get(`${MARVEL_API_CHARACTERS}?name=${name}&ts=${this.ts}&apikey=${this.apikey}&hash=${this.hash}`)
    .pipe(map((response: any) => response.data.results.map((result: any) =>
        this.arrayCharacters = {id: result.id, name: result.name,
                                  path: result.thumbnail.path = result.thumbnail.path + "/portrait_uncanny." + result.thumbnail.extension,
                                    comics: result.comics.items, description: result.description}
        )))
  }
  characterById(id: string) : Observable<Character[]> {
    return this.http.get(`${MARVEL_API_CHARACTERS}/${id}?&ts=${this.ts}&apikey=${this.apikey}&hash=${this.hash}`)
    .pipe(map((response: any) => response.data.results.map((result: any) =>
        this.arrayCharacters = {id: result.id, name: result.name,
                                  path: result.thumbnail.path = result.thumbnail.path + "/portrait_uncanny." + result.thumbnail.extension,
                                    comics: result.comics.items, description: result.description}
        )))
  }
}
