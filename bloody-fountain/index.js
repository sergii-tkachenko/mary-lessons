"use strict";

var mic, fft;
var eqB, eqM, eqT;

function setup() {
   createCanvas(710, 400);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);

   eqB = new EQ(1);
   eqM = new EQ(2);
   eqT = new EQ(3);
}

function draw() {
   background(0);
   stroke(0,255,0);
   const spectrum = fft.analyze();

   // get the energy
   let eBass = fft.getEnergy('bass');
   let eMid = fft.getEnergy('mid');
   let eTreble = fft.getEnergy('treble');

   noStroke();
   fill(255,255,255);  // text is white
   textSize(20);
   text("bass: " + round(eBass), 10, 40);
   text("mid: " + round(eMid), 10, 80);
   text("treble: " + round(eTreble), 10, 120);

   eqB.move(eBass);
   eqM.move(eMid);
   eqT.move(eTreble);
   eqB.display();
   eqM.display();
   eqT.display();
}

function EQ(index) {
  this.x = width / 4 * index;
  this.y = random(height);
  this.diameter = 30;

  this.move = function(arg) {
    const relY = height / 256 * arg;
    this.y = height - relY - (this.diameter / 2);
  };

  this.display = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};
