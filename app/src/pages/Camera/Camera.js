export default {
	name: 'Camera',
	
	
	data() {
		return {
			detectedMeal: 'bolognese'//null
		}
	},
	
	
	mounted() {
		this.video = this.$refs.video;
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
				this.video.srcObject = stream;
				this.video.play();
			});
		}
	},
	
	
	methods: {
		onGetIngredients() {
			this.$router.push({name: 'ingredients', params: {meal: this.detectedMeal}});
		}
	}
}
