import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/character.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  
  searchCharacters(query = '', page = 1, gender = '') {
    return this.http.get<Character[]>(`${environment.baseUrlApi}/?name=${query}&page=${page}&gender=${gender}`)
  }
  getDetails(id: number) {
    return this.http.get<Character>(`${environment.baseUrlApi}/${id}`)
  }
}
