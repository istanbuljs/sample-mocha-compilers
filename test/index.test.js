let Rectangle = require('../index'),
    assert = require('assert');

describe('rectangle', function () {
    it('calculates area', function () {
        let r = new Rectangle(10,10);
        assert.ok(r.area === 100);
    });
});

