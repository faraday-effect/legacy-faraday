Template.rubricEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentRubricId = this._id;

    var rubricProperties = {
      name: $(e.target).find('[name=name]').val()
    };

    Rubrics.update(currentRubricId, {$set: rubricProperties}, function(error) {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('rubricDetail', {_id: currentRubricId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this rubric?")) {
      var currentRubricId = this._id;
      Rubrics.remove(currentRubricId);
      Router.go('rubricsList');
    }
  }
});
