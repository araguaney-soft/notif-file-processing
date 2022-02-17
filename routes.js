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

router.get('/healthz', (req, res) => {
    res.json({
        health: "ok"
    });
    console.log('health ok')
});

module.exports = router;