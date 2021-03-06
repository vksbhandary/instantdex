'use strict';

Instantdex.controller('NavigationController', function($scope, $state, GlobalServices){
	$scope.tabActive = [];
	$scope.tabActive[0] = true;
	$scope.tabActive[1] = false;
	$scope.tabActive[2] = false;
	$scope.tabActive[3] = false;
    $scope.showInitSpinner = GlobalServices.showInitSpinner;
	$scope.$on("appInitialised", function(event, data){
        // $scope.showInitSpinner = false;
        GlobalServices.showInitSpinner = false;
        $scope.showInitSpinner = false;
    });

	$scope.setTabActive = function(index){
		for(var i in $scope.tabActive){
			if(i == index){
				$scope.tabActive[i] = true;
			}
			else{
				$scope.tabActive[i] = false;
			}
		}
	}

	$scope.$on("tabChanged", function(event, data){
		$scope.setTabActive(data);
	});
});
