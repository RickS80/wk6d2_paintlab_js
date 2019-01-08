const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){

  let room;

  beforeEach(function(){
    room = new Room(10)
  });

  it('should start not painted', function(){
    const actual = room.paintedArea
    assert.strictEqual(actual, 0)
  })

  it('should be paintable', function(){
    room.paint(5)
    const actual = room.paintedArea
    assert.strictEqual(actual, 5)
  })

});
