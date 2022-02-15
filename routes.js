const express = require('express');
const router = express.Router(); 

router.get('/dapr/subscribe', (req, res) => {
    res.json([{
        topic: "batchReceived",
        route: "batchReceived",
        pubsubname: "messagebus"
    }]);
    console.log('received')
});

router.get('/healthz', (req, res) => {
    res.json({
        health: "ok"
    });
    console.log('health ok')
});

module.exports = router;