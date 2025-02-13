import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    window.scroll();
  }

  goTo() {
    this.router.navigate(['/confirmacao']);
  }

  phoneValidate() {
    const phone = document.getElementById('celular') as HTMLInputElement;
    const phoneValue = phone.value;
    const phoneRegex = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;

    if (phoneRegex.test(phoneValue)) {
      return true;
    } else {
      alert('Número de telefone inválido');
      return false;
    }
  }

  dateValidate() {
    const date = document.getElementById('nascimento') as HTMLInputElement;
    let dateValue = date.value;

    dateValue = dateValue.replace(/\D/g, '');

    if (dateValue.length > 2) {
      dateValue = dateValue.slice(0, 2) + '/' + dateValue.slice(2)
    }

    if (dateValue.length > 5) {
      dateValue = dateValue.slice(0, 5) + '/' + dateValue.slice(5);
    }

    dateValue = dateValue.slice(0, 10);
    date.value = dateValue;
  }

  nameValidate(): boolean {
    const nameInput = document.getElementById('nome') as HTMLInputElement;
    const nameValue = nameInput.value.trim();

    if (nameValue.split(' ').length >= 2) {
      return true;
    } else {
      alert('Por favor, insira pelo menos um sobrenome.');
      return false;
    }
  }
}
