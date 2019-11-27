import Vue from 'vue'

import VueAxios from '@/plugins/VueAxios';

import Components from './components';
import Directives from './directives';

import App from '@/pages/App'
import Router from './router'
import Store from './store';


Vue.use(VueAxios);

Vue.use(Components);
Vue.use(Directives);


new Vue({
	router: Router(),
	store: Store(),
	render: h => h(App)
}).$mount('#app');
