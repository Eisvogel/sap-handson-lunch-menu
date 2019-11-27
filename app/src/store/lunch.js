import Vue from 'vue';

import API from './api';


const api = API(Vue.$axios);


export default {
	namespaced: false,
	
	
	state: Object.assign({
		language: null,
		image: null,
		meal: null,
		ingredients: null,
	}, require('./dummy.json')),
	
	
	mutations: {
		
		updateLanguage(state, language) {
			state.language = language;
		},
		
		updateImage(state, image) {
			state.image = image;
		},
		
		updateMeal(state, meal) {
			state.meal = meal;
		},
		
		updateIngredients(state, ingredients) {
			state.ingredients = ingredients;
		},
		
	},
	
	
	actions: {
		
		async classify({state}) {
			await api.classifyImage({imageDataUrl: state.image});
		}
		
	}
}
