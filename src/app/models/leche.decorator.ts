import { BebidaDecorator } from './bebida-decorator';
import { Bebida } from './bebida.interface';

export class Leche extends BebidaDecorator {
  private readonly precioExtra: number = 5;

  constructor(bebida: Bebida) {
    super(bebida);
  }

  override getDescripcion(): string {
    return this.bebidaEnvuelta.getDescripcion() + ' + Leche';
  }

  override getPrecio(): number {
    return this.bebidaEnvuelta.getPrecio() + this.precioExtra;
  }
}
