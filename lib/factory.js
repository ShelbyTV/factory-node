/*
 * Node Factory
 * -------------
 * Creates objects according to the following pattern:
 * 1. One or more 'supers' become the object prototype
 * 2. One of more 'subs' become a 'surface' layer of attributes (not defined on the proto)
 */

module.exports = {

  _addSub : function(_super, sub){
    Object.keys(sub).forEach(function(k){
      _super[k] = sub[k];
    });
    return _super;
  },

  build : function(_super, sub){
    var obj = Object.create(_super);
    return ( (sub) ? this._addSub(obj, sub) : obj);
  }

};
