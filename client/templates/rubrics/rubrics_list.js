Template.rubricsList.helpers({
  rubrics: function() {
	return Rubrics.find({}, {sort: {submitted: -1}});
  }
});
