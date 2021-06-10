const express = require('express');
const cors = require('cors');
const routes = require('./routes')
require('./database');

const app = express();
app.use(express.json());
app.use(function (request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });
app.use(cors());

app.use(routes);
const port = 3333;
app.listen(port, () => {
	console.log(`running on port ${port}.`);
});