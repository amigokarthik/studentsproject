'use strict';

/* Inject Dependencies */
LoginService.$inject = ['$http', '$q', 'AppConstants'];

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
function LoginService($http, $q, AppConstants){

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
    INSTANCE.login  = function(){
      var deferred = $q.defer();
      $http.get(AppConstants.apiUrl+'/lc.php')
      .success(function(response, status, headers, config) {
        deferred.resolve(response) }).error(
      function(data, status, headers, config){
        deferred.reject(data)
      });
      // return your promise to the user
      return deferred.promise;

    };

    /** functions exposed by the service **/
    return INSTANCE;
}

// Export the module
module.exports = {
  name : 'LoginService', // Change this name
  fn : LoginService // Change this function name
};
