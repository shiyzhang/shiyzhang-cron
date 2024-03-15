/***********************************************
 * @Author: shiyzhang zsyou0911@126.com
 * @Date: 2024-03-08 09:53
 * @Description:
 *
 ***********************************************/
import type { App } from 'vue';

import * as components from './components';

export const install = function (app: App) {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
};
export default {
  install,
};
