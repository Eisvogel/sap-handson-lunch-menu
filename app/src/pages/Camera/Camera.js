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
	
	
	beforeDestroy() {
		this.$refs.video.srcObject.getTracks().forEach($ => $.stop());
	},
	
	
	methods: {
		onGetIngredients() {
			this.captureImage();
			this.$store.dispatch('classify');
			// this.$router.push({name: 'ingredients', params: {meal: this.detectedMeal}});
		},
		
		
		captureImage() {
			let camera = this.$refs.video;
			let cameraWidth = camera.clientWidth;
			let cameraHeight = camera.clientHeight;
			
			let video = this.$refs.video;
			let videoWidth = video.videoWidth;
			let videoHeight = video.videoHeight;
			
			let cameraAspectRatio = cameraWidth / cameraHeight;
			let videoAspectRatio = videoWidth / videoHeight;
			
			let width, height;
			
			if (cameraAspectRatio > videoAspectRatio) {
				width = videoWidth;
				height = parseInt(cameraAspectRatio * videoWidth);
			} else {
				width = parseInt(cameraAspectRatio * videoHeight);
				height = videoHeight;
			}
			
			let canvas = document.createElement('canvas');
			canvas.width = width;
			canvas.height = height;
			
			let context = canvas.getContext('2d');
			context.drawImage(video, (videoWidth - width) / 2, (videoHeight - height) / 2, width, height, 0, 0, width, height);
			
			var image = canvas.toDataURL('image/png');
			
			this.$store.commit('updateImage', image);
		}
	}
}
