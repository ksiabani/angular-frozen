angular
    .module('app', [])
    .controller('MainController', MainController)
    .factory('Icecast', Icecast);

MainController.$inject = ['Icecast'];
Icecast.$inject = ['$http'];

function MainController(Icecast) {
    var vm = this;
    Icecast.then(function(data) {
        vm.icecast = data;
    });
}

function Icecast($http) {

    return $http({
        method: 'GET',
        url: 'http://localhost:1337/178.62.56.31:8000/ds128',
        headers: {
            'Icy-MetaData': 1
            //'Accept': 'text/plain'
            // 'Content-Type': 'text/plain'
        }
    })
        .then(success, fail);

    function success(response) {
        return response.data;
    }

    function fail(response) {
        return response;
    }
}