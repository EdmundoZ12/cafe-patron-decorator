import { Bebida } from './bebida.interface';

export abstract class BebidaDecorator implements Bebida {
  protected bebidaEnvuelta: Bebida;

  constructor(bebida: Bebida) {
    this.bebidaEnvuelta = bebida;
  }

  getDescripcion(): string {
    return this.bebidaEnvuelta.getDescripcion();
  }

  getPrecio(): number {
    return this.bebidaEnvuelta.getPrecio();
  }
}
