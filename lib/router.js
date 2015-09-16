Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',

  waitOn: function() {
	return Meteor.subscribe('rubrics');
  }
});

Router.route('/', { name: 'rubricsList' });

Router.route('/rubrics/:_id', {
  name: 'rubricPage',
  data: function () {
	return Rubrics.findOne(this.params._id);
  }
});

Router.onBeforeAction('dataNotFound', {
  only: 'rubricPage'
});
