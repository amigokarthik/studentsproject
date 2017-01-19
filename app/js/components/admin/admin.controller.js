'use strict';

/* Inject Dependencies */
AdminController.$inject = ['$scope', '$location', '$state', 'AppConstants','SessionService','AdminService', 'toastr'];

/**
* Controller responsible for managing login data
* =============================================================================
*
* @param {[type]} $scope                [description]
* @param {[type]} $location             [description]
* @param {[type]} AppConstants          [description]
* @param {[type]} AuthenticationService [description]
* @param {[type]} toastr                [description]
* @param {[type]} SessionService        [description]
*/
function AdminController($scope, $location, $state, AppConstants,
	SessionService,AdminService, toastr) {
	var self = this;

	//============================================================================
	//                            INIT BLOCK                                    //
	//============================================================================


	//============================================================================
	//                            EVENTS BLOCK                                  //
	//============================================================================

	// Gets called when the page has completed loading
	$scope.$on('$stateChangeSuccess', function() {

		AdminService.retcom().then(function(response){
			var datac = [];
			for(var i = 0;i<response.length; i++){
				datac.push(response[i]);
				//console.log(response[i].cname);
			}
			self.datap = datac;
		}, function(error){
			console.log(error);
		})


	});
	//============================================================================
	//                            FUNCTIONS BLOCK                               //
	//============================================================================



	self.addCourse = function(){
		console.log(self.cdesc);
		var reqdata = {'cn':self.cName,'cd':self.cdesc};
		var l=0;
		AdminService.addcourse(reqdata).then(function(response){
			console.log(response);
		});
	}

	self.rank = function(name,course){
		var res=document.getElementById("rnk").value;
		console.log(res);
		var reqdata = {"un":name,"cn":course,"rn":res};
		var l=0;
		AdminService.addrank(reqdata).then(function(response){
			console.log(response);
		});
		$state.reload();
	}



};

// Export the module
module.exports = {
	name : 'AdminController', // Change this name
	fn : AdminController, // Change this function name
	type : 'controller'
};
