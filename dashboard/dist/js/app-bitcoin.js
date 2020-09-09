
/*Downloaded from https://www.codeseek.co/condacore/angular-chartjs-bitcoin-price-json-ayBpba */
angular.module("app", ["chart.js"]).controller("LineCtrl", function($scope, $http, $filter, API) {
    'use strict';
    $scope.price_data = [];
    $scope.price_labels = [];
    API.getData('https://www.coincap.io/history/BTC').then(function(values) {
        angular.forEach(values.price, function(value, key) {
            $scope.price_data.push(value[1]);
            $scope.price_labels.push($filter('date')(value[0], 'medium'));
        });
    });

    $scope.series = [
        'Price'
    ];
    $scope.colors = ['#ff6384'];
    $scope.options = {
        animation: false,
        responsive: true,
        tooltipEvents: [
            'mousemove',
            'touchstart',
            'touchmove'
        ],
        elements: {
            point: {
                radius: 0
            },
            line: {
                fill: false
            }
        },
        scales: {
            yAxes: [{
                display: true
            }],
            xAxes: [{
                display: false
            }]
        }
    };
}).factory('API', function($http) {
    'use strict';
    var coins = [];
    return {
        getData: function(selection, $url, $log) {
            var _url = selection;
            if (typeof $url !== 'undefined') {
                _url += $url;
            }
            return $http({
                method: 'GET',
                url: _url
            }).then(function(response) {
                coins = response.data;
                return coins;
            }, function error(response) {
                $log.log(response);
                return false;
            });
        }
    };
}).filter('numberWithCommas', function() {
    'use strict';
    return function(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    };
});
