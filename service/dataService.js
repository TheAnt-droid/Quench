
let dataService = {};

dataService.save = function(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
};

dataService.get = function(key) {
  const dataString = localStorage.getItem(key);
  try {
    return JSON.parse(dataString);
  } catch (e) {
    return null;
  }
};

dataService.update = function(key, partialObject) {
  const current = this.get(key) || {};
  const updated = { ...current, ...partialObject };
  this.save(key, updated);
};

export default dataService;
