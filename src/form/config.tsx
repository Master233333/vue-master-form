import {CreateElement} from 'vue';
import {Input} from 'ant-design-vue';

class Config {
  public errorMessage: any = {
    required: '%t不能为空',
    max: '%t不能大于%v',
    min: '%t不能小于%v',
  };

  public getInputs = (h: CreateElement) => {
    return (type?: string, data?: any) => {
    };
  };

}

const config = new Config();

export default config;

