import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);


export default () => new Router({
	mode: 'hash',
	routes: [
		{
			name: 'home',
			path: '',
			redirect: {name: 'camera'}
		},
		{
			name: 'camera',
			path: '/camera',
			component: () => import('@/pages/Camera'),
		},
		{
			name: 'ingredients',
			path: '/ingredients/:meal',
			component: () => import('@/pages/Ingredients'),
			props: true
		},
		{
			path: '*',
			redirect: {name: 'home'}
		}
	]
});
