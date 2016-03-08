appModule.factory('newService',['$http',
	function($http){
		var urlBase='IssueList.json';
		var newService={};
		newService.getData=function(){
			return $http.get(urlBase);
		}
		return newService;
}]);
// module_name.service('newService',['$http',
// 	function($http){
// 		var urlBase='JSON/index.json';
// 		this.getData = function(){
// 			return $http.get(urlBase);
// 		}
// 		this.putData = function(db){
// 			return $http.post(urlBase,db);
// 		}
		
// 	}]);
