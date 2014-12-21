App.Models.Contact = Backbone.Model.extend({
  // Validate
  validate: function(attrs) {
    if (! attrs.first_name || ! attrs.last_name) {
      return 'First and lat name are required.';
    }
    if (! attrs.email_address) {
      return 'Please enter a valid email address.';
    }
  }
});