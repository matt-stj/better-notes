import Ember from 'ember';

export default Ember.Component.extend({

  showRendered: false,

  renderedNote: Ember.computed('note.content', 'showRendered', function () {
    var content = '<h4>' + this.get('note.content').toUpperCase() + '</h4>';
    return this.get('showRendered') ? content : Ember.Handlebars.SafeString(content);
  })

});
