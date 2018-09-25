var makeDogDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  // console.log(this);
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node.append('<img src="dog.png" class="dancer"></img>');
  this.$node.append('<img src="dog.png" onmouseover=this.src="green.png" class="dancer"></img>');
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.step();
  //return blinkyDancer;
  this.$node.css({animation: 'wobble-hor-bottom 1.5s infinite both', '-webkit-animation': 'wobble-hor-bottom 1.5s infinite both'})
};

makeDogDancer.prototype = Object.create(makeDancer.prototype);
makeDogDancer.prototype.constructor = makeDogDancer;
makeDogDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.css();
  this.$node.animate();
};

// reassign setPosition function our specific top / left parameters
