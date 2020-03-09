// lib/app.ts
import express = require('express');// Create a new express application instance
import {userRoutes} from './routes'

import * as bodyParser from "body-parser";

let cors = require('cors')

const app: express.Application = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRoutes);
app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});