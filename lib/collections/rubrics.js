Rubrics = new Mongo.Collection('rubrics');

Rubrics.allow({
  update: function(userId, rubric) { return ownsDocument(userId, rubric); },
  remove: function(userId, rubric) { return ownsDocument(userId, rubric); }
});

Meteor.methods({
  rubricInsert: function(rubricAttributes) {
	check(Meteor.userId(), String);
	check(rubricAttributes, {
	  name: String
	});

	var user = Meteor.user();
	var rubric = _.extend(rubricAttributes, {
	  questions: [ ],
	  userId: user._id,
	  submitted: new Date()
	});

	var rubricId = Rubrics.insert(rubric);

	return { _id: rubricId };
  }
});
