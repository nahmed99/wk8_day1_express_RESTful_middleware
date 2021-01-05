const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_route');

const teas = [
  { name: "Early Grey", brand: "Twinings" },
  { name: "Irish Breakfast", brand: "Barry's Tea" },
  { name: "Lemon and Ginger", brand: "Lipton" },
  { name: "Rooibos", brand: "Tick Tock" },
  { name: "Green", brand: "Clipper" }
];

const biscuits = [
  { name: "Digestives", brand: "McVitie's" },
  { name: "Hobnobs", brand: "McVitie's" },
  { name: "Shortbreads", brand: "Walkers" },
  { name: "Jammy Dodgers", brand: "Burton's" },
  { name: "Custard Creams", brand: "Crawford's" }
];

app.use(cors());
app.use(bodyParser.json()); // use body parser for JSON

const teasRouter = createRouter(teas);
app.use('/api/teas', teasRouter);


const biscuitsRouter = createRouter(biscuits);
app.use('/api/biscuits', biscuitsRouter);



// RESTful
// RESTful
// RESTful


// // INDEX - get all teas - this is the directory that you need to access in the browser.
// app.get('/api/teas', (request, response) => {
//   response.json({teas});
// });

// // SHOW - get a single tea
// // using different names for request and response to illustrate that you can! Used "teaId", but convention is to use "id"..?
// app.get('/api/teas/:teaId', (req, res) => {
//   const teaIndex = req.params.teaId;
//   res.json(teas[teaIndex]);
// });


// // CREATE - create a new tea. You need middleware to handle the body of a POST.
// app.post('/api/teas', (req, res) => {
//   teas.push(req.body);
//   res.json(teas);
// });


// // DESTROY 
// // - handle a delete request made to /api/teas/:id
// // - delete the appropriate tea object in the array
// // - send back all the teas data as JSON
// app.delete('/api/teas/:id', (req, res) => {
//   const teasId = req.params.id; // get id
//   teas.splice(teasId, 1); // delete the teas with matching id, deleting one record
//   res.json(teas); // return all of the remaining teas
// });


// // UPDATE
// // - handle a put request made to /api/teas/:id
// // - update the appropriate tea object in the array with the new tea object sent on the request's body object
// // - send back all the teas data as JSON
// app.put('/api/teas/:id', (req, res) => {
//   const id = req.params.id; // get id
//   const updatedTea = req.body;
//   teas[id] = updatedTea;
//   res.json(teas); // return all of the remaining teas
// });



app.listen(5000, function () {
  console.log(`App running on port ${ this.address().port }`);
});
