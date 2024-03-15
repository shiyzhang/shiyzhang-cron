/***********************************************
 * @Author: shiyzhang zsyou0911@126.com
 * @Date: 2024-03-15 16:19
 * @Description:
 *
 ***********************************************/
import { createApp } from 'vue';
import App from './App.vue';
import Ant from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import EasyCron from '../components';

console.log('Ant', Ant);
console.log('EasyCron', EasyCron);
const app = createApp(App);
app.use(Ant);
app.use(EasyCron);
app.mount('#app');
