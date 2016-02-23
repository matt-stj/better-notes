import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(note){
  var limit = 100
  if (note.length > limit) {
    var theString = note.substring(0,limit) + " ... ";
    return new Ember.Handlebars.SafeString(theString);
  }

  else {
      return note;
  }

});
