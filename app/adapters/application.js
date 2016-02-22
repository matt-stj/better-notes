import DS from 'ember-data';

const electron = requireNode('electron');
const mainProcess = electron.remote.require('./electron');
const filesystem = mainProcess.filesystem;

export default DS.Adapter.extend({

  findAll() {
    return filesystem.all();
  },

  createRecord(store, type, snapshot) {
    var data = this.serialize(snapshot, { includeId: true });
    var filename = data.id
    var content = data.content

    return filesystem.write(filename, content)
       .then(file => console.log(file));
  }

});
