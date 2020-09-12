import express from "express";
import mongoose from "mongoose";
import data from './data.js';

//app config
const app = express();
const port = 9000;

// middlewares

// DB config

// API endpoints
app.get("/", (req, res) => {
    res.status(200).send('Hello world');
});

app.get("/v1/posts", (req, res) => {
    res.status(200).send(data);
});

// listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`));