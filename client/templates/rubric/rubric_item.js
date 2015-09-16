Template.rubricItem.helpers({
  ownRubric: function() {
	return this.userId === Meteor.userId();
  }
});

Template.rubricItem.events({
  'submit .question-input': function(e) {
	e.preventDefault();

	rubricId = this._id;
	questionCtrl = $(e.target).find('[name=new-question]');
	questionText = questionCtrl.val();

	Rubrics.update(rubricId, { $addToSet: { questions: { text: questionText } } });
	questionCtrl.val('');
  }
});
