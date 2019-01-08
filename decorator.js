const Decorator = function(){
  this.paintstock = [];
}


Decorator.prototype.addPaint = function (paint_amount) {
  this.paintstock.push(paint_amount)
};

module.exports = Decorator;
