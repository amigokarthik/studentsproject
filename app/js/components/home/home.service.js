'use strict';

/* Inject Dependencies */
HomeService.$inject = ['$http', '$q', 'AppConstants'];

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
function HomeService($http, $q, AppConstants){

    // Service instance variable
    var INSTANCE = {};
    var config = {
      headers : {
        "Content-Type" : 'application/json'
      }
    }

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
    INSTANCE.home  = function(){
      var deferred = $q.defer();
      $http.get(AppConstants.apiUrl+'/courser.php')
      .success(function(response, status, headers, config) {
        deferred.resolve(response) }).error(
      function(data, status, headers, config){
        deferred.reject(data)
      });
      // return your promise to the user
      return deferred.promise;

    };

    INSTANCE.enroll  = function(params){
      console.log("service called")
      var deferred = $q.defer();
      $http.post(AppConstants.apiUrl+'/coursee.php',params)
      .success(function(response, status, headers, config) {
        deferred.resolve(response) }).error(
      function(data, status, headers, config){
        deferred.reject(data)
      });
      // return your promise to the user
      return deferred.promise;

    };

    INSTANCE.comp  = function(params){
      var deferred = $q.defer();
      $http.get(AppConstants.apiUrl+'/coursec.php?un='+params)
      .success(function(response, status, headers, config) {
        deferred.resolve(response) }).error(
      function(data, status, headers, config){
        deferred.reject(data)
      });
      // return your promise to the user
      return deferred.promise;

    };

    INSTANCE.cocomp  = function(params){
      console.log("service called")
      var deferred = $q.defer();
      $http.post(AppConstants.apiUrl+'/courseco.php',params)
      .success(function(response, status, headers, config) {
        deferred.resolve(response) }).error(
      function(data, status, headers, config){
        deferred.reject(data)
      });
      // return your promise to the user
      return deferred.promise;

    };

    INSTANCE.ranks  = function(params){
      console.log("service called")
      var deferred = $q.defer();
      $http.post(AppConstants.apiUrl+'/ranksre.php?un='+params)
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
  name : 'HomeService', // Change this name
  fn : HomeService // Change this function name
};
