import {mapState} from 'vuex'


export default {
	name: 'Ingredients',
	
	
	props: {
		meal: String
	},
	
	
	mounted() {
		console.log(this.$store.state.lunch);
	},
	
	
	computed: {
		...mapState({
			image: $ => $.lunch.image || null,
			ingredients: $ => $.lunch.ingredients,
		})
	},
	
	
	methods: {
		onReadAloud() {
			console.log('Read Aloud');
		}
	}
}
