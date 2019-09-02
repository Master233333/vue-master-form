import {Store} from '@/form/core/createStore';

export class FormObj {
  private store: Readonly<Store>;

  public constructor(s: Readonly<Store>) {
    this.store = s;
  }

  public bindField() {

  }
}

export function createFormObj(s: Readonly<Store>) {
  return Object.freeze(new FormObj(s));
}
