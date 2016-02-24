import Ember from 'ember';

export default Ember.Component.extend({

  wordCount:  Ember.computed('note.content', function(){
    return this.get('note.content').split(' ').length;
  }),

  characterCount: Ember.computed('note.content', function(){
    return this.get('note.content').length;
  })
});
