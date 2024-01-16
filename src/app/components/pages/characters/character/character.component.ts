import { chainedInstruction } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, Input, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Character } from 'src/app/shared/interfaces/character.interface';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character;

  ngOnInit(): void {
  }

}
