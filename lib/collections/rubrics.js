Rubrics = new Mongo.Collection('rubrics');

Meteor.methods({
  rubricInsert: function(rubricAttributes) {
	check(Meteor.userId(), String);
	check(rubricAttributes, {
	  name: String
	});

	var user = Meteor.user();
	var rubric = _.extend(rubricAttributes, {
	  userId: user._id,
	  submitted: new Date()
	});

	var rubricId = Rubrics.insert(rubric);

	return { _id: rubricId };
  }
});
