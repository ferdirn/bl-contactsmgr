App.Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function() {
    console.log('This is index page');
  }
});