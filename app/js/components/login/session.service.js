'use strict';

/* Inject Dependencies */
SessionService.$inject = ['$http', '$q', 'AppConstants'];

/**
 * Service to manage all dummy operations
 * =============================================================================
 *
 * @param {{type}} $http        [description]
 * @param {[type]} $q           [description]
 * @param {[type]} AppConstants [description]
 * @param {[type]} FormUtils    [description]
 * @param {[type]} SessionService    [description]
 */
function SessionService($http, $q, AppConstants){

    // Service instance variable
    var INSTANCE = {};

    /**
     * Dummy Comment
     * =========================================================================
     * Lorem Ipsum is simply dummy text of the printing and typesetting.
     * Lorem Ipsum has been the industry's standard dummy text ever since the
     * 1500s, when an unknown printer took a galley of type and scrambled it
     * to make a type specimen book.
     *
     * @param  {[type]} params      [description]
     * @return {[type]}             [description]
     */
    INSTANCE.setUser  = function(params){

      localStorage.setItem("un",params);

    };

    INSTANCE.getUser  = function(){

        return localStorage.getItem("un");


    };

    /** functions exposed by the service **/
    return INSTANCE;
}

// Export the module
module.exports = {
  name : 'SessionService', // Change this name
  fn : SessionService // Change this function name
};
