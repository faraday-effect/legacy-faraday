Meteor.publish('rubrics', function() {
  return Rubrics.find();
});
