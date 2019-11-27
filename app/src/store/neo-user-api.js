import Vue from 'vue';


export default {
	namespaced: true,
	
	
	state: {
		displayName: undefined,
		email: undefined,
		firstName: undefined,
		lastName: undefined,
		name: undefined,
	},
	
	
	getters: {
		initialized(state) {
			return typeof state.name === 'string';
		}
	},
	
	
	mutations: {
		update(state, {displayName, email, firstName, lastName, name}) {
			Object.assign(state, {displayName, email, firstName, lastName, name});
		}
	},
	
	
	actions: {
		async fetch(context) {
			let response = await Vue.$axios.get('/services/userapi/currentUser');
			context.commit('update', response.data);
		}
	}
}
