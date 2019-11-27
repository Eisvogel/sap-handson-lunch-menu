const util = require('util');
const fs = require('fs');
const PredictionApiClient = require("@azure/cognitiveservices-customvision-prediction");

const predictionKey = "4bc4024a42574af5a9035f863d9c29ec";
const predictionResourceId = "/subscriptions/7f00d669-ec22-420d-9f63-c4d59f485aa4/resourceGroups/dev-Accessibility-Lunch/providers/Microsoft.CognitiveServices/accounts/lunch-menu";
const imageFile = "<path to image file>";

const endPoint = "https://lunch-menu.cognitiveservices.azure.com/"

const publishIterationName = "classifyModel";

(async () => {
    const predictor = new PredictionApiClient(predictionKey, endPoint);
    const testFile = fs.readFileSync(`${imageFile}`);
    const results = await predictor.classifyImage(sampleProject.id, publishIterationName, testFile);
    if (results.predictions.length > 1 && (results.predictions[0].probability * 100.0).toFixed(2) > 80)
    {
        const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
        const EntitySearchAPIClient = require('azure-cognitiveservices-entitysearch');

        let credentials = new CognitiveServicesCredentials('90e8c6684b7b4aefaf3102fe3d6dcca6');
        let entitySearchApiClient = new EntitySearchAPIClient(credentials);

        entitySearchApiClient.entitiesOperations.search(results.predictions[0].tagName).then((result) => {
            console.log(result.queryContext);
            console.log(result.entities.value);
            console.log(result.entities.value[0].description);
        }).catch((err) => {
            throw err;
        });
    }
})()