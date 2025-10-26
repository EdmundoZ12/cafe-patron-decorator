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
    this.ingredientesAgregados.push('Leche (+5Bs.)');
  }

  agregarChocolate(): void {
    this.bebidaActual = new Chocolate(this.bebidaActual);
    this.ingredientesAgregados.push('Chocolate (+6Bs.)');
  }

  agregarCrema(): void {
    this.bebidaActual = new Crema(this.bebidaActual);
    this.ingredientesAgregados.push('Crema batida (+5Bs.)');
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
          'Total: Bs' +
          this.obtenerPrecio().toFixed(2)
      );
    } else {
      alert(
        '✅ ¡Pedido confirmado!\n\n' +
          this.obtenerDescripcion() +
          '\n' +
          'Total: Bs' +
          this.obtenerPrecio().toFixed(2) +
          '\n\n' +
          '¡Gracias por tu preferencia!'
      );
    }
    this.reiniciar();
  }
}
