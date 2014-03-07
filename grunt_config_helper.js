module.exports = function(grunt, grunt_config) {
  return {
    loadCfg: function(cfgName, options) {
      if(options) {
        grunt_config[cfgName] = require('./grunt_config/' + cfgName + '.js')(options)
      } else {
        grunt_config[cfgName] = require('./grunt_config/' + cfgName + '.js')
      }
    },
    registerTask: function(task_name) {
      var toUnderscore = function(string){
        return string.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
      };
      require('./grunt_config/tasks/' + toUnderscore(task_name) + '_task.js')(grunt)
    }
  }
}