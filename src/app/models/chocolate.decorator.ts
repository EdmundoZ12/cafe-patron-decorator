import { BebidaDecorator } from './bebida-decorator';
import { Bebida } from './bebida.interface';

export class Chocolate extends BebidaDecorator {
  private readonly precioExtra: number = 6;

  constructor(bebida: Bebida) {
    super(bebida);
  }

  override getDescripcion(): string {
    return this.bebidaEnvuelta.getDescripcion() + ' + Chocolate';
  }

  override getPrecio(): number {
    return this.bebidaEnvuelta.getPrecio() + this.precioExtra;
  }
}
