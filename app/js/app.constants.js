'use strict';

// Cloud server ip
const SERVER_URL = 'http://www.bringmyweb.com';

/*
 * app.constants.js
 * =============================================================================
 * Define all application specific constants to be used inside
 * angular modules here.
 */
const AppConstants = {
  /* Application title */
  appTitle: 'app title',
  appName : 'application name',
  /* Application Version */
  version: '0.1',
  httpTimeout: 5000,
  /* API resource end point */
  apiUrl: SERVER_URL+':/sp',
  loginUrl : "/login",
  logoutUrl : "/logout"
};

module.exports = AppConstants;
