var factory = require('../index.js');

var super = {
  'foo':'bar'
};

var sub = {
  'goo':'har'
};

var obj = factory.build(super, sub);
console.log('proto', obj.__proto__);
console.log('sub', obj);
