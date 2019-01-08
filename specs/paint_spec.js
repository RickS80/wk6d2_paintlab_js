const assert = require('assert');
const PaintCan = require('../paint.js');


describe('PaintCan', function() {

  let paintCan;

  beforeEach(function (){
    paintCan = new PaintCan(3);
});

  it('should be able to check how much paint is left', function (){
    const actual = paintCan.capacity - paintCan.usedpaint
    assert.strictEqual(actual, 3)
  }
)

  it('should be able to check if it is empty', function () {
    paintCan.usedpaint = 3
    const actual = paintCan.capacity - paintCan.usedpaint
    assert.strictEqual(actual, 0);
  })


});
