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
  name: 'rubricDetail',
  data: function () {
	return Rubrics.findOne(this.params._id);
  }
});

Router.route('/rubrics/:_id/edit', {
  name: 'rubricEdit',
  data: function () {
	return Rubrics.findOne(this.params._id);
  }
});

Router.route('/add', { name: 'rubricAdd' });

function requireLogin() {
  if (! Meteor.user()) {
	if (Meteor.loggingIn()) {
	  this.render(this.loadingTemplate);
	} else {
	  this.render('accessDenied');
	}
  } else {
	this.next();
  }
}

Router.onBeforeAction('dataNotFound', {
  only: 'rubricDetail'
});

Router.onBeforeAction(requireLogin, {
  only: 'rubricAdd'
});
