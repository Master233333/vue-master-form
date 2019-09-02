import {VNode, VNodeData} from "vue";

export interface IVNodeData extends VNodeData {
  children?: VNode[];
}

export interface IFormUtils {
  addField: (name: string) => void;
  removeField: (name: string) => void;
  bindField: (name: string, rules?: any[], options?: any) => (input: VNode, props?: any) => VNode;
}

export interface IBaseForm {

}

export interface IItem {
  name: string;
}
