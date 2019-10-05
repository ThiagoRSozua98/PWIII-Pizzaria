import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  FormComanda: FormGroup;

  constructor(public formBuilder: FormBuilder) {  }

  ngOnInit() {
    this.FormComanda= this.formBuilder.group({
      chopp: this.formBuilder.control(''),
      pizza: this.formBuilder.control(''),
      recheio: this.formBuilder.control(''),
      pessoa: this.formBuilder.control(''),
      taxa: this.formBuilder.control( true)
    })
  }
}
