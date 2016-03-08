appModule
    .controller('addTotable', ['$scope', 'newService', '$localStorage', '$state',
        function($scope, newService, $localStorage, $state) {
            $scope.names = [];
            $scope.item = {};
            if (!$localStorage.data) {
                newService.getData()
                    .success(function(data) {
                        // $scope.names = $localStorage.data = data;
                    });
            } else {
                $scope.names = $localStorage.data;
            }

            $scope.insert = function() {
                console.log($scope.item);
                var item = {};
                item = $scope.item;
                var doc = {
                    que1: item.que1,
                    que2: item.que2,
                    que3: item.date
                };
                var x = $localStorage.data || [];
                x.push(doc);
                console.log(x);
                $localStorage.data = x;
                $scope.isModalOpen = true;

            }
            $scope.clearStoragedata = function() {
                if ($localStorage.data) {
                    delete $localStorage.data;
                    window.setTimeout(function() {
                        $state.go('Issues');
                    }, 1500);
                }
            }
            $scope.showIssues = function() {
                window.setTimeout(function() {
                    $state.go('Issues');
                }, 500);
            };
            $('#star-rating').rating();
            var chart = AmCharts.makeChart("chartdiv", {
                "type": "pie",
                "theme": "light",
                "dataProvider": [{
                    "status": "Hold",
                    "value": 260
                }, {
                    "status": "New",
                    "value": 201
                }, {
                    "status": "WIP",
                    "value": 65
                }, {
                    "status": "Pending",
                    "value": 39
                }, {
                    "status": "Not assigned",
                    "value": 19
                }],
                "valueField": "value",
                "titleField": "status",
                "outlineAlpha": 0.4,
                "depth3D": 15,
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                "angle": 30,
                "export": {
                    "enabled": true
                }
            });
        }
    ]);
