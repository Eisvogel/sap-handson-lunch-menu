export default axios => {
	let api = {};
	
	let context = require.context('./', false, /^.\/(?!index\.js$).+\.js$/i);
	
	for (let key of context.keys()) {
		let module = context(key).default;
		
		let name = key.replace('./', '').replace('.js', '').replace(/(-\w)/g, m => m[1].toUpperCase());
		api[name] = module(axios);
	}
	
	return api;
}
