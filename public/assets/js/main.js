(function(){
  window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Helpers: {},
    Router: {}
  };

  window.vent = _.extend({}, Backbone.Events);

  App.Helpers.template = function(id) {
    return _.template( $('#' + id).html() );
  }
})();