import {getNames} from '@/utils/objectUtils';

export class Store {
  private values: any = {};
  private meta: any = {};

  public addField(name: string) {
    this.values[name] = undefined;
    this.meta[name] = {};
  }

  public removeField(name: string) {
    delete this.values[name];
    delete this.meta[name];
  }

  public setValues(obj: {[name: string]: any}) {
    getNames(obj).forEach((name) => {
      if (!this.values.hasOwnProperty(name)) {
        console.warn('form store: can not set value not on form dom');
        return;
      }
      this.values[name] = obj[name];
    });
  }

  public getValue(name: string) {
    return this.values[name];
  }

  public getValues(names?: string[]) {
    if (!names) {
      return this.values;
    }
    return names.map((name) => this.values[name]);
  }

  public getMeta(name: string) {
    return this.meta[name];
  }

  public getMetas(names?: string[]) {
    if (names) {
      const out: any = {};
      names.forEach((name) => out[name] = this.meta[name]);
      return out;
    }
    return this.meta;
  }

  public setMeta(name: string, obj: any) {
    if (!this.meta.hasOwnProperty(name)) {
      console.warn('form store: can not set meta not on form dom');
      return;
    }
    this.meta[name] = obj;
  }

  public resetFields(names?: string[]) {
    if (names) {
      names.forEach((name) => {
        this.addField(name);
      });
    } else {
      getNames(this.values).forEach((name) => {
        this.addField(name);
      });
    }
  }

}

export function createStore() {
  return Object.freeze(new Store());
}
