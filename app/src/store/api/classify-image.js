import {PredictionAPIClient} from '@azure/cognitiveservices-customvision-prediction';
import CognitiveServicesCredentials from 'ms-rest-azure';
import EntitySearchAPIClient from 'azure-cognitiveservices-entitysearch';

const endPoint = 'https://lunch-menu.cognitiveservices.azure.com/';
const predictionKey = '4bc4024a42574af5a9035f863d9c29ec';
const projectId = '371f8b71-6ca7-4882-ba51-bffde7ea5cc2';
const publishIterationName = 'Iteration1';


export default axios => async ({imageDataUrl}) => {
	const predictor = new PredictionAPIClient(predictionKey, endPoint);
	
	let tmp = await axios.get(imageDataUrl);
	console.log(tmp);
	
	let imageBase64 = imageDataUrl.replace('data:image/png;base64,', '');
	console.log(imageBase64);
	let image = _base64ToArrayBuffer(imageBase64);
	console.log(image);
	
	// const results = await predictor.classifyImage(projectId, publishIterationName, imageDataUrl);
	
	const result = await axios.post('https://lunch-menu.cognitiveservices.azure.com/customvision/v3.0/prediction/371f8b71-6ca7-4882-ba51-bffde7ea5cc2/classify/iterations/Iteration1/image', {
		headers: {
			'prediction-key': '4bc4024a42574af5a9035f863d9c29ec',
			'Sec-Fetch-Dest': 'empty',
			'Sec-Fetch-Mode': 'cors',
			'Sec-Fetch-Site': 'cross-site',
			'Access-Control-Allow-Origin': '*'
		},
		body: tmp.data
	});
	console.log(result);
	return;
	
	
	if (results.predictions.length < 0) return null;
	
	let sorted = results.predictions
		.filter($ => $.probability > 0.8)
		.sort((left, right) => left.probability > right.probability);
	
	let prediction = sorted[0];
	if (prediction.probability < 0.8) return null;
	
	let credentials = new CognitiveServicesCredentials('90e8c6684b7b4aefaf3102fe3d6dcca6');
	let entitySearchApiClient = new EntitySearchAPIClient(credentials);
	
	let searchResult = await entitySearchApiClient.entitiesOperations.search(results.predictions[0].tagName);
	console.log(searchResult.queryContext);
	console.log(searchResult);
	console.log(searchResult.entities.value);
	console.log(searchResult.entities.value[0].description);
}


function _base64ToArrayBuffer(base64) {
	var binary_string = window.atob(base64);
	var len = binary_string.length;
	var bytes = new Uint8Array(len);
	for (var i = 0; i < len; i++) {
		bytes[i] = binary_string.charCodeAt(i);
	}
	return bytes.buffer;
}


function ab2str(buf) {
	return String.fromCharCode.apply(null, new Uint8Array(buf));
}


/*
POST /customvision/v3.0/prediction/371f8b71-6ca7-4882-ba51-bffde7ea5cc2/classify/iterations/Iteration1/image HTTP/1.1
Host: lunch-menu.cognitiveservices.azure.com
Connection: keep-alive
Content-Length: 393494
Pragma: no-cache
Cache-Control: no-cache
sec-ch-ua: Google Chrome 78
Origin: http://localhost:8080
x-ms-command-name: @azure/cognitiveservices-customvision-prediction/4.0.0 ms-rest-js/2.0.4 OS/MacIntel
prediction-key: 4bc4024a42574af5a9035f863d9c29ec
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryqV1YvXhXByDqA7hs
Sec-Fetch-Dest: empty
Accept: */

