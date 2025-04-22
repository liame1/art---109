var socket;
// const { io } = require('../server.js');
// console.log(io);

import { io } from '../server';

function setup() {
    createCanvas(600, 600);
    background(60);

    // socket = io.connect('http://127.0.0.1:3000');
    socket = io.connect('http://127.0.0.1:5501/tutorials/p5-starter/public/index.html');
}

function draw() {
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
    fill(-mouseX, mouseY, mouseX);
}
