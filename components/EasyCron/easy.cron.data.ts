/***********************************************
 * @Author: shiyzhang zsyou0911@126.com
 * @Date: 2024-03-01 14:41
 * @Description: easy.cron.data.ts
 *
 ***********************************************/
import { propTypes } from '../_utils/propTypes';

export const cronEmits = ['change', 'update:value'];
export const cronProps = {
  value: propTypes.string.def(''),
  disabled: propTypes.bool.def(false),
  hideSecond: propTypes.bool.def(false),
  hideYear: propTypes.bool.def(false),
  remote: propTypes.func,
};
