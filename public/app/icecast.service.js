(function () {
    'use strict';

    angular
        .module('app')
        .factory('Icecast', Icecast);

    Icecast.$inject = ['$http'];

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

})();
