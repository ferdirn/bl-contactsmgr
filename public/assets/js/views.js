/*
|--------------------------------------------------------------------------
| Global App View
|--------------------------------------------------------------------------
|
| Views index
|
*/

App.Views.App = Backbone.View.extend({
  initialize: function() {
    var addContactView = new App.Views.AddContact({ collection: App.contacts });
    var contactsView = new App.Views.Contacts({ collection: App.contacts });
    $('#allContacts').append(contactsView.render().el);
  }
});

/*
|--------------------------------------------------------------------------
| Form Add Contact
|--------------------------------------------------------------------------
|
| Add contact form
|
*/

App.Views.AddContact = Backbone.View.extend({
  el: '#addContact',
  events: {
    'submit': 'addContact'
  },
  addContact: function(e) {
    e.preventDefault();

    var newContact = this.collection.create({
      first_name: this.$('#first_name').val(),
      last_name: this.$('#last_name').val(),
      email_address: this.$('#email_address').val(),
      description: this.$('#description').val()
    }, {wait: true});
  }
});

/*
|--------------------------------------------------------------------------
| All Contacts View
|--------------------------------------------------------------------------
|
| Show All Contacts View
|
*/

App.Views.Contacts = Backbone.View.extend({
  tagName: 'tbody',
  initialize: function() {
    this.collection.on('add', this.addOne, this);
  },
  render: function() {
    this.collection.each(this.addOne, this);
    return this;
  },
  addOne: function(contact) {
    var contactView = new App.Views.Contact({ model: contact });
    this.$el.append(contactView.render().el);
  }
});

/*
|--------------------------------------------------------------------------
| Single Contact View
|--------------------------------------------------------------------------
|
| Show Contact
|
*/

App.Views.Contact = Backbone.View.extend({
  tagName:'tr',
  template: App.Helpers.template('allContactsTemplate'),
  initialize: function() {
    this.model.on('destroy', this.removeContact, this);
  },
  events: {
    'click .deleteContact' : 'deleteContact'
  },
  deleteContact: function() {
    this.model.destroy();
  },
  removeContact: function() {
    this.remove();
  },
  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    return this;
  }
});