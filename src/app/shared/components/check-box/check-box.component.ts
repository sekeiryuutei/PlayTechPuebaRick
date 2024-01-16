import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {

  @Output() SendinputMale = new EventEmitter<string>();
  @Output() SendinputFemale = new EventEmitter<string>();

  constructor() { }

  inputFemale: boolean = false;
  inputMale: boolean = false;

  ngOnInit(): void {
  }

  enviarInformacionMale() {
    this.inputFemale = false;
    this.SendinputMale.emit(String(this.inputMale));
  }

  enviarInformacionFemale() {
    this.inputMale = false;
    this.SendinputFemale.emit(String(this.inputFemale));
  }

}
