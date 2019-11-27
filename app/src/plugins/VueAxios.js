import axios from 'axios';


export default {
	install(Vue, options) {
		const instance = axios.create({
			withCredentials: true
		});
		
		let descriptor = {
			value: instance,
			enumerable: true,
			writable: false
		};
		
		Object.defineProperty(Vue, '$axios', descriptor);
		Object.defineProperty(Vue.prototype, '$axios', descriptor);
	}
}
