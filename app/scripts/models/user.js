var Backbone = require('backbone');

var User = Backbone.Model.extend({
  idAttribute: 'objectId',
});

var UserCollection = Backbone.Collection.extend({
  model: User,
});

module.exports = {
  User,
  UserCollection
};
