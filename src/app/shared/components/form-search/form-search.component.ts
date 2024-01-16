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

  recibirInformacionMale(estadoCheckbox: any) {
    this.estadoCheckboxRecibidoMale = estadoCheckbox;
    this.estadoCheckboxRecibidoFemale = false;
    if (estadoCheckbox === "true") {
      this.router.navigate(['/character-list'], {
        queryParams: { g: 'Male' }
      })
    } else {
      this.clearRuote();
    }
    console.log("Buscar Male", estadoCheckbox);
  }
  recibirInformacionFemale(estadoCheckbox: any) {
    this.estadoCheckboxRecibidoFemale = estadoCheckbox;
    this.estadoCheckboxRecibidoMale = false;
    if (estadoCheckbox === 'true') {
      this.router.navigate(['/character-list'], {
        queryParams: { g: 'Female' }
      })
    } else {
      this.clearRuote();
    }
    // console.log("Buscar Female", estadoCheckbox, estadoCheckbox==='false', typeof estadoCheckbox);
  }
  onSearch(value: string) {
    console.log(value, ">>")
    if (value && value.length == 0) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value }
      })

    }
  }
  clearRuote() {
    this.router.navigate(['/character-list'], {
      queryParams: { q: '' }
    })
  }

}
