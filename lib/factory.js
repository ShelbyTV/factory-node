/*
 * Node Factory
 * -------------
 * Creates objects according to the following pattern:
 * 1. One or more 'supers' become the object prototype
 * 2. One of more 'subs' become a 'surface' layer of attributes (not defined on the proto)
 */

module.exports = {

  _addSub : function(super, sub){
    Object.keys(sub).forEach(function(k){
      super[k] = sub[k];
    });
    return super;
  },

  build : function(super, sub){
    var obj = Object.create(super);
    return ( (sub) ? this._addSub(obj, sub) : obj);
  }

};
