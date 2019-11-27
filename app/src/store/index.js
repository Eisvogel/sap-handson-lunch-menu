import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export default () => {
	const store = new Vuex.Store({
		strict: true,
		
		
		state: {},
		
		
		mutations: {},
		
		
		actions: {},
		
		
		modules: {
			currentUser: require('./neo-user-api.js').default,
			lunch: require('./lunch.js').default
		},
	});
	
	
	let descriptor = {
		value: store,
		enumerable: true,
		writable: false
	};
	
	Object.defineProperty(Vue, '$store', descriptor);
	
	return store;
}
