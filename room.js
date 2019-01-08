const Room = function (area){
  this.area = area
  this.paintedArea = 0
};


Room.prototype.paint = function (paint_amount) {
  return this.paintedArea += paint_amount
};


module.exports = Room;
