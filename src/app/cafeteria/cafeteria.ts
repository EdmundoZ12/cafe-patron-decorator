import { Component, OnInit } from '@angular/core';
import { CafeBasico } from '../models/cafe-basico';
import { Leche } from '../models/leche.decorator';
import { Chocolate } from '../models/chocolate.decorator';
import { Crema } from '../models/crema.decorator';
import { Bebida } from '../models/bebida.interface';

@Component({
  selector: 'app-cafeteria',
  imports: [],
  templateUrl: './cafeteria.html',
  styleUrl: './cafeteria.css',
})
export class Cafeteria {
  bebidaActual: Bebida = new CafeBasico();

  ingredientesAgregados: string[] = [];

  agregarLeche(): void {
    this.bebidaActual = new Leche(this.bebidaActual);
    this.ingredientesAgregados.push('Leche (+$0.50)');
  }

  agregarChocolate(): void {
    this.bebidaActual = new Chocolate(this.bebidaActual);
    this.ingredientesAgregados.push('Chocolate (+$0.75)');
  }

  agregarCrema(): void {
    this.bebidaActual = new Crema(this.bebidaActual);
    this.ingredientesAgregados.push('Crema batida (+$0.30)');
  }

  reiniciar(): void {
    this.bebidaActual = new CafeBasico();
    this.ingredientesAgregados = [];
  }

  obtenerDescripcion(): string {
    return this.bebidaActual.getDescripcion();
  }

  obtenerPrecio(): number {
    return this.bebidaActual.getPrecio();
  }

  confirmarPedido(): void {
    if (this.ingredientesAgregados.length === 0) {
      alert(
        '🎯 Pedido confirmado:\n\n' +
          this.obtenerDescripcion() +
          '\n' +
          'Total: $' +
          this.obtenerPrecio().toFixed(2)
      );
    } else {
      alert(
        '✅ ¡Pedido confirmado!\n\n' +
          this.obtenerDescripcion() +
          '\n' +
          'Total: $' +
          this.obtenerPrecio().toFixed(2) +
          '\n\n' +
          '¡Gracias por tu preferencia!'
      );
    }
    this.reiniciar();
  }
}
