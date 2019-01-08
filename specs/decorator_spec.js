const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function (){

  let decorator;

  beforeEach(function(){
    decorator = new Decorator
  });

  it('should start with no paintstock', function() {
    const actual = decorator.paintstock
    assert.deepStrictEqual(actual, [])
  })

  it('should be able to add a can of paint to paintstock', function(){
    decorator.addPaint(3)
    const actual = decorator.paintstock.length;
    assert.strictEqual(actual, 1)
  })
})
