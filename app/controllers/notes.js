import Ember from 'ember';

export default Ember.Controller.extend({
  newNoteId: null,
  newNoteContent: null,

  actions: {
    createNewNote: function(){
      let id = this.get('newNoteId') + '.md';
      let content = this.get('newNoteContent');

      if (!this.get('model').findBy('id', id)) {
        let newRecord = this.store.createRecord('note', {
          id: id,
          content: content
        });

        newRecord.save().then(data => {
          this.transitionToRoute('notes.note', data).then(() => {
            this.set('newNoteId', '');
            this.set('newNoteContent', '');
          });
        });
      } else {
        alert('That note title has been taken.');
      }
    },

    openFile: function() {
      this.store.adapterFor('application').changeDirectory();
    }

  }

});
