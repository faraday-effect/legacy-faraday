Template.rubricItem.helpers({
  ownRubric: function() {
	return this.userId === Meteor.userId();
  }
});
