var Backbone = require('backbone');

var Chat = Backbone.Model.extend({
  idAttribute: 'objectId',
});

var ChatCollection = Backbone.Collection.extend({
  model: Chat,
  url: 'https://tiny-parse-server.herokuapp.com/classes/Message'
});

module.exports = {
  Chat,
  ChatCollection
};
