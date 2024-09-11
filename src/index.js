"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, "/views"));
app.get('/', function (request, response) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        response.render("index", data);
    });
});
app.listen(3000, function () {
    console.log("Server is running");
});
