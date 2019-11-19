'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var exec = require('cordova/exec');

var FabricPlugin = (function () {
    function FabricPlugin() {
        _classCallCheck(this, FabricPlugin);
    }

    _createClass(FabricPlugin, [{
        key: 'pluginCallName',
        value: function pluginCallName() {
            return 'FabricPlugin';
        }
    }, {
        key: 'execPlugin',
        value: function execPlugin(method, parameters) {
            exec(null, null, this.pluginCallName(), method, parameters);
        }
    }, {
        key: 'initialize',
        value: function initialize(success) {
            exec(success, null, this.pluginCallName(), "initialize", []);
        }
    }, {
        key: 'isInitialized',
        value: function isInitialized(success) {
            exec(success, null, this.pluginCallName(), "isInitialized", []);
        }
    }]);

    return FabricPlugin;
})();

module.exports = new FabricPlugin();