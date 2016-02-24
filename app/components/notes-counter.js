import Ember from 'ember';

export default Ember.Component.extend({

  notesTotal: Ember.computed('notes', function () {
    let notes = this.get('notes');

    return notes.content.length
  })

});
