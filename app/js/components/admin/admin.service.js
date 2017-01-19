'use strict';

/* Inject Dependencies */
AdminService.$inject = ['$http', '$q', 'AppConstants'];

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
function AdminService($http, $q, AppConstants){

    // Service instance variable
    var INSTANCE = {};
    var config = {
      headers : {
        "Content-Type" : 'application/json'
      }
    }

    INSTANCE.addcourse  = function(params){
      console.log("service called")
      var deferred = $q.defer();
      $http.post(AppConstants.apiUrl+'/adminc.php',params)
      .success(function(response, status, headers, config) {
        deferred.resolve(response) }).error(
      function(data, status, headers, config){
        deferred.reject(data)
      });
      // return your promise to the user
      return deferred.promise;
    };

    INSTANCE.retcom  = function(){
      var deferred = $q.defer();
      $http.get(AppConstants.apiUrl+'/scourser.php')
      .success(function(response, status, headers, config) {
        deferred.resolve(response) }).error(
      function(data, status, headers, config){
        deferred.reject(data)
      });

      // return your promise to the user
      return deferred.promise;

    };

    INSTANCE.addrank  = function(params){
      console.log("rank service called")
      var deferred = $q.defer();
      $http.post(AppConstants.apiUrl+'/rank.php',params)
      .success(function(response, status, headers, config) {
        deferred.resolve(response) }).error(
      function(data, status, headers, config){
        deferred.reject(data)
      });
      // return your promise to the user
      return deferred.promise;
    };


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

    /** functions exposed by the service **/
    return INSTANCE;
}

// Export the module
module.exports = {
  name : 'AdminService', // Change this name
  fn : AdminService // Change this function name
};
