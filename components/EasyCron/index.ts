/***********************************************
 * @Author: shiyzhang zsyou0911@126.com
 * @Date: 2024-03-01 14:41
 * @Description: 到处组件
 *
 ***********************************************/
import type { App, ExtractPropTypes, Plugin } from 'vue';
import EasyCron from './EasyCronInner.vue';
import { cronRule } from './validator';
import { cronProps } from './easy.cron.data';

export type SelectProps = Partial<ExtractPropTypes<ReturnType<typeof cronProps>>>;
EasyCron.validator = cronRule.validator;
EasyCron.install = function (app: App) {
  app.component(EasyCron.name, EasyCron);
  return app;
};
export default EasyCron as typeof EasyCron &
  Plugin & {
    readonly validator: typeof cronRule.validator;
  };
