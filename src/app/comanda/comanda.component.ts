import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  FormComanda: FormGroup;

  constructor(public formBuilder: FormBuilder) {  }

  ngOnInit() {
    this.FormComanda = this.formBuilder.group({
      chopp: this.formBuilder.control(''),
      pizza: this.formBuilder.control(''),
      recheio: this.formBuilder.control(''),
      pessoa: this.formBuilder.control(''),
      servico: this.formBuilder.control(false)
    })
  }
  
  onProcessar(){
    let chopp = this.FormComanda.value.chopp;
    let pizza = this.FormComanda.value.pizza;
    let recheio = this.FormComanda.value.recheio;
    let pessoa = this.FormComanda.value.pessoa;
    let servico = this.FormComanda.value.taxa;


    let gasto = (chopp * 7.30) + (pizza * 31.50) + (recheio * 5.90);
    let taxa = gasto * 0.10;
    let total = gasto;
    
    if (servico){
      total = gasto + taxa;
    }

    let gastoPessoa = total / pessoa;

  
    alert(`Consumo ${gasto.toFixed(2)} \n Serviços ${taxa.toFixed(2)} \n Total ${total.toFixed(2)} \n Por Pessoa ${gastoPessoa.toFixed(2)}`);
  }
}
