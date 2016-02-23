import Ember from 'ember';

export default Ember.Controller.extend({
  newNoteId: null,
  newNoteContent: null,

  actions: {
    createNewNote: function(){
      let id = this.get('newNoteId');
      let content = this.get('newNoteContent');

      this.store.createRecord('note', {
        id: id,
        content: content
      }).save().then(() => {
        this.set('newNoteId', '');
        this.set('newNoteContent', '');
      });
    }
  }

});
