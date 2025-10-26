import { Bebida } from './bebida.interface';

export class CafeBasico implements Bebida {
  private readonly precio: number = 10;

  getDescripcion(): string {
    return 'Café';
  }

  getPrecio(): number {
    return this.precio;
  }
}
