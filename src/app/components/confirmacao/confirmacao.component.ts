import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css'],
})

export class ConfirmacaoComponent implements OnInit {
  public method = '';

  constructor(private router: Router) {}

  ngOnInit() {
    window.scroll();
  }

  sendCode(method: string): void {
    this.method = method === 'email' ? 'email' : 'celular';

    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');

    if (section1 && section2) {
      section1.classList.add('hidden');
      section2.classList.remove('hidden');
    }
  }

  confirmCode(): void {
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');

    if (section2 && section3) {
      section2.classList.add('hidden1');
      section3.classList.remove('hidden1');
    }
  }

  goBack(): void {
    this.router.navigate(['/login']);
  }
}
