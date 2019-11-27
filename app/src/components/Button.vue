<template>
	<button type="button" :data-style="type" @click="$emit('click', $event)">
		<slot/>
	</button>
</template>


<script>
	export default {
		name: 'Button',
		props: {
			type: String
		}
	}
</script>


<style lang="scss" scoped>
	button {
		padding: 0.5rem 1rem;
		
		overflow: hidden;
		
		outline: none;
		border: 1px solid transparent;
		border-radius: 0.25rem;
		
		background-color: transparent;
		
		font-size: 0.875rem;
		font-weight: normal;
		
		user-select: none;
		
		&:not([data-style]),
		&[data-style="primary"] {
			background-color: #013e94;
			color: white;
		}
		&[data-style="secondary"] {
			border-color: #013e94;
			color: #013e94;
		}
		&[data-style="destructive"] {
			background-color: #960000;
			color: white;
		}
	}

</style>
