import Vue from 'vue';
import {Component as TsxComponent} from 'vue-tsx-support';

export class MhComponent<Props> extends TsxComponent<Props> {
  static name: string;
  static install(vue: typeof Vue, options?: any): void;
}
