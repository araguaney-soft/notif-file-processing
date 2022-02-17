const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const subscribe = require('./routes.js');

const app = express();

// Dapr publishes messages with the "application/cloudevents+json" content-type
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.json());

app.use('/', subscribe);
 
app.listen(config.PORT, () => console.log(`Batch Processor listening on port ${config.PORT}!`));