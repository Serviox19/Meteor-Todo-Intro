Items = new Meteor.Collection("items");

if (Meteor.isClient) {
  Template.list.helpers({
    items: function() {
      return Items.find();
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function() {
    if (Items.find().count() == 0) {
      var items = [
        { description: "Create Meteor App"},
        { description: "Go to Gym"},
        { description: "Watch Warriors game"}
      ];

      for (var i = 0; i < items.length; i++) {
        Items.insert(items[i]);
      }
    }
  });
}
