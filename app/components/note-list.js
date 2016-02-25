import Ember from 'ember';

export default Ember.Component.extend({

  searchTerm: null,

  availableNotes: Ember.computed('notes', 'searchTerm', function () {
    let term = this.get('searchTerm');
    let notes = this.get('notes');
    if (term) {
      let lowerCaseTerm = term.toLowerCase();

      return notes.filter(note => note.serialize()
                            .content.toLowerCase().includes(lowerCaseTerm)
                          || note.id.toLowerCase().includes(lowerCaseTerm))

               }
    return notes;
  })

});
