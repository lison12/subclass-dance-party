var makeDogDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  // console.log(this);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="dog.png" class="dancer"></img>');
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.step();
  //return blinkyDancer;
  this.$node.css({animation: 'rotate-90-cw 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both', '-webkit-animation': 'rotate-90-cw 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both'})
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