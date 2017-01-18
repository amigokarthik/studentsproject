'use strict';

/* Inject Dependencies */
HomeController.$inject = ['$scope', '$location', '$state', 'AppConstants','LoginService','SessionService'];

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
function HomeController($scope, $location, $state, AppConstants,LoginService,SessionService) {
	var self = this;

	//============================================================================
	//                            INIT BLOCK                                    //
	//============================================================================


	//============================================================================
	//                            EVENTS BLOCK                                  //
	//============================================================================

	// Gets called when the page has completed loading
	$scope.$on('$stateChangeSuccess', function() {
		self.un = SessionService.getUser();



	});

	//============================================================================
	//                            FUNCTIONS BLOCK                               //
	//============================================================================

	self.logout=function(){
		SessionService.setUser('');
		$state.go('login');
	}



};

// Export the module
module.exports = {
	name : 'HomeController', // Change this name
	fn : HomeController, // Change this function name
	type : 'controller'
};
