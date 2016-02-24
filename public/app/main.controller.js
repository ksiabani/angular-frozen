(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController)

    MainController.$inject = ['Icecast'];

    function MainController(Icecast) {
        var vm = this;
        Icecast.then(function(data) {
            vm.icecast = data;
        });
    }

})();
