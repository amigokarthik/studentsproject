'use strict';

/* Inject Dependencies */
onRunConfig.$inject = ['$rootScope', '$state', 'toastr', 'SessionService'];

function onRunConfig($rootScope, $state, toastr, SessionService){

  // Assign $state to be used on pages. This is mainly used for showing and
  // hiding pages pased on the state.
  $rootScope.$state = $state;

  //==========================================================================//
  //  Check the sate when the state transition starts
  //==========================================================================//
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams,
    fromState, fromParams){
    // Defined state change property check here


    if(toState.redirectTo){
      event.preventDefault();
      $state.go(toState.redirectTo,toParams);
    }

    if(toState.authenticate){
      console.log(SessionService.getUser())
      if(SessionService.getUser() == ''){
        $state.go('login');
        console.log('log');
      }
    }

  });

  //==========================================================================//
  // State to check the errors whern state url canges
  //==========================================================================//
  $rootScope.$on("$stateChangeError", function(event, toState, toParams,
    fromState, fromParams, error){
      event.preventDefault();

      // Show error messages
      toastr.error("Unable to load the requested page. Please try again.",
      error ? error.error : "Error");

      //Redirec to old page
      $state.go(fromState.redirectTo, fromParams);
  });

}

// Export the module
module.exports = onRunConfig;
