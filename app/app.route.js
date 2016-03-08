   appModule.config(function($stateProvider,$urlRouterProvider){
   	$urlRouterProvider.otherwise("/Newissue");
   	$stateProvider
   		.state('Issues',{
   			url:'/Issues',
			templateUrl:'app/components/Issues.html',
			controller:'addTotable'

   		})
   		.state('Newissue',{
   			url:'/Newissue',
			   templateUrl:'app/components/newIssue.html',
   			controller:'addTotable'
   		});
   });

// module_name.config(['$routeProvider',
// 	function($routeProvider){
// 		$routeProvider.
// 			when('/Issues',{
// 				templateUrl:'html/Issues.html',
// 				controller:'addTotable'
// 			}).
// 			when('/Newissue',{
// 				templateUrl:'html/newIssue.html',
// 				controller:'addTotable'
// 			}).
// 			otherwise({
// 				redirectTo:'/Newissue'
// 			});
// 	}]);

// module_name.controller('addTotable',['$scope',
// 	function($scope){ 
//         var databaseName="issueTable";
//     	var version=1.0;
//     	var textDescription="add issues to the table";
//     	var databaseSize=2*1024*1024;
//     	var obj=openDatabase(databaseName,version,textDescription,databaseSize);
//     	obj.transaction(function(tx){
//     		tx.executeSql('CREATE TABLE IF NOT EXISTS Issuetable (subject,assignee)');
//     	});	
//     	obj.transaction(function(tr){
//     		tr.executeSql("select * From Issuetable",[],
//     			function(transaction,result){
//     				var row;
//     			    var x=[];
//     				    for (var i = 0; i < result.rows.length; ++i){
// 							row = result.rows.item(i);
// 							x.push(row);			
// 						}
// 						$scope.db=x;
// 						$scope.$apply();
//     			});
//     	});
//     $scope.insert=function(){
//     	obj.transaction(function(tx){
//     		tx.executeSql('insert into Issuetable(subject,assignee) values("'+$scope.subject+'","'+$scope.assignee+'")');
//     	 });
//     	$scope.isModalOpen = true;
    	
//     }  
//     $scope.clear=function(){
//     	obj.transaction(function(tx){
//     		tx.executeSql('DROP TABLE Issuetable');
//     	});	
//     }	
//     $scope.clean=function(){
//     	$scope.isModalOpen=!$scope.isModalOpen;
//     	$scope.subject='';
//     	$scope.assignee='';
//     }
// 	}]);

