if (Rubrics.find().count() === 0) {
  Rubrics.insert({
	name: 'Holy Grail',
	questions: [
	  { text: 'What is your name?' },
	  { text: 'What is your quest?' },
	  { text: 'What is your favorite color?' }
	]
  });
  Rubrics.insert({
	name: 'SWEBOK Chapter 7'
  });
  Rubrics.insert({
	name: 'Crosby and Scripture'
  });
  Rubrics.insert({
	name: 'Century Tool and Die'
  });
}
