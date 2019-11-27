import Vue from 'vue';


export default {
	install(Vue, options) {
		syncComponents();
		asyncComponents();
	}
}


// Synchronous global components
function syncComponents() {
	Vue.component('Button', require('@/components/Button.vue').default);
	Vue.component('SAPIcon', require('@/components/SAPIcon.vue').default);
}


// Asynchronous global components
function asyncComponents() {
	// Vue.component('Modal', () => import(/* webpackChunkName: "modal" */ '@/components/Modal.vue'));
}
