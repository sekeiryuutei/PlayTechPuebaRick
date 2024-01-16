import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  estadoCheckboxRecibidoMale: boolean;
  estadoCheckboxRecibidoFemale: boolean;

  recibirInformacionMale(estadoCheckbox: boolean) {
    this.estadoCheckboxRecibidoMale = estadoCheckbox;
    this.estadoCheckboxRecibidoFemale = false;
    if (estadoCheckbox) {
      this.router.navigate(['/character-list'], {
        queryParams: { g: 'Male' }
      })
    }
    console.log(estadoCheckbox, "Male");
  }
  recibirInformacionFemale(estadoCheckbox: boolean) {
    this.estadoCheckboxRecibidoFemale = estadoCheckbox;
    this.estadoCheckboxRecibidoMale = false;
    if (estadoCheckbox) {
      this.router.navigate(['/character-list'], {
        queryParams: { g: 'Female' }
      })
    }
    console.log(estadoCheckbox, "female");
  }
  onSearch(value: string) {
    console.log(value, ">>")
    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value }
      })
    } else if (value.length == 0) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value }
      })
    }
  }

}
