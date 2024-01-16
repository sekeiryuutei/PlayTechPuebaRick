import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { CharacterDetailsComponent } from '../character-details/character-details.component';
import { CharacterListComponent } from '../character-list/character-list.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';

const myComponents = [CharacterComponent, CharacterDetailsComponent, CharacterListComponent];
@NgModule({
  declarations: [...myComponents],
  imports: [
    CommonModule, RouterModule, InfiniteScrollModule,
  ],
  exports: [...myComponents]
})
export class CharacterModule { }
