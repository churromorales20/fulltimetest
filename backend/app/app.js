"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express"); // Create a new express application instance
var routes_1 = require("./routes");
var bodyParser = __importStar(require("body-parser"));
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/users', routes_1.userRoutes);
app.listen(3001, function () {
    console.log('Example app listening on port 3000!');
});
