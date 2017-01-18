'use strict';

/* Inject Dependencies */
LoginController.$inject = ['$scope', '$location', '$state', 'AppConstants','LoginService','SessionService'];

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
function LoginController($scope, $location, $state, AppConstants,LoginService,SessionService) {
	var self = this;

	//============================================================================
	//                            INIT BLOCK                                    //
	//============================================================================


	//============================================================================
	//                            EVENTS BLOCK                                  //
	//============================================================================

	// Gets called when the page has completed loading
	$scope.$on('$stateChangeSuccess', function() {

	});

	//============================================================================
	//                            FUNCTIONS BLOCK                               //
	//============================================================================

	self.login = function(){
		var l=0;
		LoginService.login().then(function(response){
			console.log(response);
			var data = Object.keys(response);
			var datap = [];
			for(var i = 0;i<data.length-2; i++){
				datap.push(response[data[i]]);
			}
			for(var i = 0;i<data.length-2; i++){
				if(datap[i] == self.pswdl)
				{
					l=1;
				}
			}
			if(l == 1)
			{
				SessionService.setUser(self.userNamel);
				$state.go('home');
			}
			else if(l==0)
			{
				self.er="Please enter correct credentials";
			}
		}, function(error){
			console.log(error);
		})
	}



};

// Export the module
module.exports = {
	name : 'LoginController', // Change this name
	fn : LoginController, // Change this function name
	type : 'controller'
};
