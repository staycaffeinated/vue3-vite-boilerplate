import { createApp } from 'vue'
import App from './App.vue'
import { Router } from '/@/router';
import { Store } from '/@/store';
import { createI18n } from 'vue-i18n';
import Default from '/@/layouts/Default.vue';
import NoSidebar from '/@/layouts/NoSidebar.vue';

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

const app = createApp(App);

app.component('default-layout', Default);
app.component('no-sidebar-layout', NoSidebar);

app.use(Router);
app.use(Store);
app.use(i18n)
app.mount('#app');

