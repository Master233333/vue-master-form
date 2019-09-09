import {Input} from 'ant-design-vue';
import {CreateElement} from 'vue';

export function getInputs(h: CreateElement) {
  return (type?: string, data?: any) => {
    switch (type) {
      case 'text':
      default:
        return <Input />;
    }
  };
}

export const errorMessage: any = {
  required: '%t不能为空',
  max: '%t不能大于%v',
  min: '%t不能小于%v',
};
