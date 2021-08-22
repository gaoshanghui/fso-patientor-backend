"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/api/ping', function (_req, res) {
    console.log('received a new request.');
    res.send('pong!');
});
// app.get('/api/diagnoses', (_req, res) => {});
var PORT = 3001;
app.listen(PORT, function () {
    console.log("server is running on port " + PORT + ".");
});
