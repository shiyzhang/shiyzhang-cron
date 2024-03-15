/***********************************************
 * @Author: shiyzhang zsyou0911@126.com
 * @Date: 2024-03-01 14:41
 * @Description: 导处组件
 *
 ***********************************************/
import type { App, Plugin } from 'vue';
import EasyCronInner from './EasyCronInner.vue';
import { cronRule } from './validator';

EasyCronInner.validator = cronRule.validator;
EasyCronInner.install = function (app: App) {
  app.component(EasyCronInner.name, EasyCronInner);
  return app;
};
export default EasyCronInner as typeof EasyCronInner &
  Plugin & {
    readonly validator: typeof cronRule.validator;
  };
