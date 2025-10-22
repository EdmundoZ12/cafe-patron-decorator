import { BebidaDecorator } from './bebida-decorator';
import { Bebida } from './bebida.interface';

export class Crema extends BebidaDecorator {
  private readonly precioExtra: number = 0.3;

  constructor(bebida: Bebida) {
    super(bebida);
  }

  override getDescripcion(): string {
    return this.bebidaEnvuelta.getDescripcion() + ' + Crema batida';
  }

  override getPrecio(): number {
    return this.bebidaEnvuelta.getPrecio() + this.precioExtra;
  }
}
