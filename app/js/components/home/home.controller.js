'use strict';

/* Inject Dependencies */
HomeController.$inject = ['$scope', '$location', '$state', 'AppConstants',
'LoginService','SessionService','HomeService', 'toastr'];

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
function HomeController($scope, $location, $state, AppConstants,LoginService,
	SessionService,HomeService, toastr) {
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
		HomeService.home().then(function(response){
			var datac = [];
			for(var i = 0;i<response.length; i++){
				datac.push(response[i].cname);
				//console.log(response[i].cname);
			}

			self.Gender = datac;
		}, function(error){
			console.log(error);
		})
		self.loadCourses();
		self.loadRanks();

	});
	//============================================================================
	//                            FUNCTIONS BLOCK                               //
	//============================================================================
self.loadCourses=function(){
			HomeService.comp(self.un).then(function(response){
				console.log(response)
				self.datap = [];
						for(var i = 0;i<response.length; i++){
							self.datap.push(response[i]);
						}
			}, function(error){
				console.log(error);
			})
}
self.loadRanks=function(){
	HomeService.ranks(self.un).then(function(response){
		self.datapr = [];
		for(var i = 0;i<response.length; i++){
			self.datapr.push(response[i]);
			//console.log(response[i].cdesc);
		}
		//console.log(self.datapr[0]);
	}, function(error){
		console.log(error);
	})
}
	self.logout=function(){
		SessionService.setUser('');
		$state.go('login');
	}

	self.enroll = function(){
		if(_.isEmpty(self.gender)){
			toastr.info("Please select an option", "Invalid selection")
			return;
		}
		var reqdata = {'un':self.un,'cn':self.gender};
		var l=0;
		HomeService.enroll(reqdata).then(function(response){
			self.loadCourses();
			console.log(response);
		});
		$state.reload();
	}

	self.submit = function(params){
		//console.log("params"+params);
		var reqdata = {'un':self.un,'cn':params};
		var l=0;
		HomeService.cocomp(reqdata).then(function(response){
			self.loadCourses();
			console.log(response);
		});
	}

};

// Export the module
module.exports = {
	name : 'HomeController', // Change this name
	fn : HomeController, // Change this function name
	type : 'controller'
};
