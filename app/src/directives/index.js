export default {
	install(Vue, options) {
		let context = require.context('./', true, /^.\/v-.+\.js$/i);
		
		for (let key of context.keys()) {
			let directives = context(key).default;
			
			for (let directive in directives) {
				Vue.directive(directive, directives[directive]);
			}
		}
	}
}
