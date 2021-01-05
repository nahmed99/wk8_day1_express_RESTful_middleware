const express = require('express');

const createRouter = (data) => {
    const router = express.Router();


    // INDEX - get all teas - this is the directory that you need to access in the browser.
    router.get('/', (request, response) => {
        response.json(data);
    });
    
    // SHOW - get a single tea
    // using different names for request and response to illustrate that you can! Used "teaId", but convention is to use "id"..?
    router.get('/:teaId', (req, res) => {
        const teaIndex = req.params.teaId;
        res.json(data[teaIndex]);
    });


    // CREATE - create a new tea. You need middleware to handle the body of a POST.
    router.post('/', (req, res) => {
        data.push(req.body);
        res.json(data);
    });


    // DESTROY 
    // - handle a delete request made to /api/teas/:id
    // - delete the appropriate tea object in the array
    // - send back all the teas data as JSON
    router.delete('/:id', (req, res) => {
        const teasId = req.params.id; // get id
        data.splice(teasId, 1); // delete the teas with matching id, deleting one record
        res.json(data); // return all of the remaining teas
    });


    // UPDATE
    // - handle a put request made to /api/teas/:id
    // - update the appropriate tea object in the array with the new tea object sent on the request's body object
    // - send back all the teas data as JSON
    router.put('/:id', (req, res) => {
        // update the required element
        // req.body contains the data that has been sent in (from client)
        // req.params.id contains the index of the element to update
        data[req.params.id] = req.body; 
        res.json(data); // return all of the remaining teas
    });

    return router;
  
}

module.exports = createRouter;