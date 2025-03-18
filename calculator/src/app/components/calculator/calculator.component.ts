import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  title = 'Calculator'; // Titulo dinamico
  display: string = ''; // Visor de numeros

  // Añadir elemento al string del visor
  appendInput(value: string): void {
    this.display += value;
  }
  // Limpiar el visor
  clear(): void {
    this.display = '';
  }
  // Calcular
  calculate(): void {
    try {
      this.display = eval(this.display); // Evalua el string y hace el calculo
    } catch (e) {
        this.display = 'Error';
    }
  }
}
