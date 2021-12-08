"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    let response = {
        message: "Server is running"
    };
    res.status(200);
    res.send(response);
});
app.listen(3001, () => {
    console.log('The application is listening on port 3001!');
});
