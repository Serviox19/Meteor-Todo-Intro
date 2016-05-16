if (Meteor.isClient) {
  Template.list.helpers({
    items: function() {
      return [
        { description: "Create Meteor App"},
        { description: "Go to Gym"},
        { description: "Watch Warriors game"}
      ];
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function() {

  });
}
