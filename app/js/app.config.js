/* Inject Dependencies */
AppConfig.$inject = ["$stateProvider", "$locationProvider", 'AppConstants',
"$urlRouterProvider", "$compileProvider", "$httpProvider", "toastrConfig"];


function AppConfig($stateProvider, $locationProvider, AppConstants,
  $urlRouterProvider, $compileProvider, $httpProvider, toastrConfig){

  // Show debug info based on environment check
  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  // Configure the application routes
  $stateProvider
  // HOME STATES AND NESTED VIEWS ==============================================
  .state('login', {
    url: '/login',
    redirectTo:"signup",
    //authenticate: false,
    views : {
      'main' : {
        templateUrl: './app/components/login/login.html'
      }
    }
  })
  .state('signup', {
    parent:'login',
    url: '/signup',
    authenticate: false,
    views : {
      'content' : {
        templateUrl: './app/components/login/log.html',
        controller:'LoginController',
        controllerAs:'model'
      }
    }
  })
  .state('register', {
    parent:'signup',
    url: '/register',
    authenticate: false,
    views : {
      'subcontent' : {
        templateUrl: './app/components/login/reg.html'
      }
    }
  })
  .state('home', {
    url: '/home',
    authenticate: true,
    views : {
      'main' : {
        templateUrl: './app/components/home/header.html',
        controller:'HomeController',
        controllerAs:'model'
      }
    }
  });

  // If any route is not found then navigate to default route
  $urlRouterProvider.otherwise('/login');

  // ===========================================================================
  // Configure vendor libraries if attached
  // ===========================================================================
  angular.extend(toastrConfig, {
    closeButton: true,
    extendedTimeOut: 1000,
    timeOut: 3000,
  });
}

// Export the module
module.exports = AppConfig;
