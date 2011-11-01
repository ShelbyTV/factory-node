var factory = require('../index.js');

var super = {
  'foo':'bar'
};

var obj = factory.build(super);
console.log('proto', obj.__proto__);
console.log('sub', obj);
