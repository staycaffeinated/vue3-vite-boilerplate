import { createApp } from 'vue'
import App from './App.vue'
import { Router } from '/@/router';
import { Store } from '/@/store';
import { createI18n } from 'vue-i18n';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// css styles
import '/@/styles/index.scss';


// i18n
import messages from '@intlify/vite-plugin-vue-i18n/messages';

const i18n = createI18n({
  locale: 'en',
  messages,
});

createApp(App)
  .use(Router)
  .use(Store)
  .use(i18n)
  .mount('#app');

