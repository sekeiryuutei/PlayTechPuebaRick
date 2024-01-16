import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
    const toggleMenuElement = document.getElementById('toggle-menu');
    const mainMenuElement = document.getElementById('main-menu');
  }

  ngOnInit(): void {
  }

  @ViewChild('toggleMenu') toggleMenuElement: ElementRef;
  @ViewChild('mainMenu') mainMenuElement: ElementRef;

  ngAfterViewInit() {
    // Ahora puedes acceder a los elementos usando toggleMenuElement.nativeElement y mainMenuElement.nativeElement
  }

  // Ejemplo de uso:
  toggleMenu() {
    this.mainMenuElement.nativeElement.classList.toggle('open');
  }

}
