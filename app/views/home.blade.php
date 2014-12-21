<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contacts Manager</title>
</head>
<body>

  <h1>Contacts</h1>

  <form action="" id="addContact">
    <div>
      <label for="first_name">First Name:</label>
      <input type="text" id ="first_name" name="first_name">
    </div>
    <div>
      <label for="last_name">Last Name:</label>
      <input type="text" id="last_name" name="last_name">
    </div>
    <div>
      <label for="email_address">Email Address:</label>
      <input type="text" id="email_address" name="email_address">
    </div>
    <div>
      <label for="description">Description:</label>
      <textarea name="description" id="description" cols="50" rows="3"></textarea>
    </div>
    <div>
      <input type="submit" value="Add Contact">
    </div>
  </form>

  <script src="//code.jquery.com/jquery.js"></script>
  <script src="//underscorejs.org/underscore.js"></script>
  <script src="//backbonejs.org/backbone.js"></script>
  <script src="assets/js/main.js"></script>
  <script src="assets/js/models.js"></script>
  <script src="assets/js/collections.js"></script>
  <script src="assets/js/views.js"></script>
  <script src="assets/js/router.js"></script>

  <script>
    new App.Router;
    Backbone.history.start();

    // Init data
    App.contacts = new App.Collections.Contacts;
    App.contacts.fetch().then(function() {
      new App.Views.App({ collection: App.contacts });
    });
  </script>

</body>
</html>