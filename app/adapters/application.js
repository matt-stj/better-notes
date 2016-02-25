import DS from 'ember-data';

const electron = requireNode('electron');
const mainProcess = electron.remote.require('./electron');
const filesystem = mainProcess.filesystem;

export default DS.Adapter.extend({

  findAll() {
    return filesystem.all();
  },

  findRecord(modelName, id, options) {
    return filesystem.find(options)
  },

  createRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, { includeId: true });
    let filename = data.id
    let content = data.content

    return filesystem.write(filename, content);
  },

  updateRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, { includeId: true });
    return filesystem.write(data.id, data.content);
  },

  deleteRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, { includeId: true });
    return filesystem.destroy(data.id)
      .then(console.log(type.content));
  },

  changeDirectory() {
    const electron = requireNode('electron');
    const mainProcess = electron.remote.require('./electron');
    let dirPath = mainProcess.openDirectory();
    console.log(dirPath[0]);
    debugger;


    return filesystem.setBaseDirectory()
  }

});
