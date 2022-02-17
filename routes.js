const express = require('express');
const router = express.Router();  
const axios = require('axios');
const config = require('./config.js');
const daprStoreUrl = `http://localhost:${config.DAPR_HTTP_PORT}/v1.0/state/${config.TABLE_STORAGE}`


router.get('/dapr/subscribe', (req, res) => {
    res.json([{
        topic: "batchReceived",
        route: "batchReceived",
        pubsubname: "messagebus"
    }]);
    /*key = 20; 
    axios.get("http://dummy.restapiexample.com/api/v1/employees",  { headers: {} })
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
         .catch(function (error) {
            // handle error
            console.log(error);
          });*/

});

router.get('/testhub', (req, res) => {

    
    for (let index = 0; index <1000; index++) {
        
        axios.get("http://localhost:3500/v1.0/publish/eventhubs-pubsub/notif1-eventhub-message", { "grettings": "hello world" } ,  { headers: {
            "Content-Type": "application/json"
        } })
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
         .catch(function (error) {
            // handle error
            console.log(error.errno);
          });
    }
    console.log({
        "status" : "ok"
    })
    res.json([{
        "status" : "ok"
    }]);
});

router.get('/healthz', (req, res) => {
    res.json({
        health: "ok"
    });
    console.log('health ok')
});

module.exports = router;