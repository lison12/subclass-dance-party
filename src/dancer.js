// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step(); 
  // this.lineUp(left);
  this.setPosition(top, left);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
};

makeDancer.prototype.step = function() {
  
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(left) {

var styleSettings = {
    top: 400,
    left: left
  };

  this.$node.css(styleSettings);

}

makeDancer.prototype.mouseOver = function() {

var styleSettings = {
    bo
  };

  this.$node.css(styleSettings);

}