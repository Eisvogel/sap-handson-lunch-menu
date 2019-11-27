<template>
	<i :class="[fontFamily, 'icon-'+iconName]" v-if="srcComponents"></i>
</template>


<script>
	export default {
		name: 'SAPIcon',
		props: {
			src: String
		},
		computed: {
			fontFamily() {
				return this.srcComponents.fontFamily
			},
			
			iconName() {
				return this.srcComponents.iconName
			},
			
			srcComponents() {
				let match = this.src.match(/^([-a-z]+):\/\/(.*)$/i);
				if (match) {
					return {
						fontFamily: match[1],
						iconName: match[2]
					}
				} else {
					return null
				}
			}
		}
	}
</script>


<style lang="scss" scoped>
	@import "~@/assets/fonts/SAP-icons.scss";
</style>
