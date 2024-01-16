import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Character } from 'src/app/shared/interfaces/character.interface';
import { CharacterService } from 'src/app/shared/services/character.service';
import { filter, take } from "rxjs/operators"
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  info: RequestInfo = {
    next: null,
  }
  
  showGoUpButton = false;

  private pageNum = 1;

  private gender = "";

  private query: string;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.onUrlChanged();
  }

  ngOnInit(): void {
    this.getCharacterByQuery();
    this.getCharacterByGender();
  }
  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.characters = [];
        this.pageNum = 1;
        this.getCharacterByGender();
        this.getCharacterByQuery();

      }
      )
  }
  private getCharacterByGender(): void {
    this.route.queryParams.pipe(
      take(1)).subscribe((params: ParamMap) => {
        this.gender = params['g'];
        this.getDataFromService();
      })
  }
  private getCharacterByQuery(): void {
    this.route.queryParams.pipe(
      take(1)).subscribe((params: ParamMap) => {
        this.query = params['q'];
        this.getDataFromService();
      })
  }
  private getDataFromService(): void {
    this.characterSvc.searchCharacters(this.query, this.pageNum, this.gender)
      .pipe(
        take(1)
      ).subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.characters = [...this.characters, ...results]
          this.info = info
        } else {
          this.characters = [];
        }
      })
  }
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet =  window.scrollY;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  onScrollUP(): void {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }
  onScrollDown(): void {
    if (this.info.next) {
      this.pageNum++;
      this.getDataFromService();
    }
  }

}
