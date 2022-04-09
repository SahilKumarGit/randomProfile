const Router = require('express');
const express = require('express');
const plearsPath = require('../controllers/savePlayerFn');

const router = express.Router();


/*---------------------------------------
    Assignments(Structure of the routes file would look like what is given at the bottom of the document):
    You have to write a POST apis:
    Write the api in first project directory (Routes/index.js or routes/route.js) Problem Statement 1 :
    NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits )
    Your player collection should be an ARRAY of player objects. Each player object should have the
---------------------------------------*/

router.post('/players',plearsPath.savePlayers) 


module.exports = router;