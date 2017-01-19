angular.module('templatescache', []).run(['$templateCache', function($templateCache) {$templateCache.put('./app/components/admin/left.html','<center>\n<form ng-submit="model.addCourse()" name="pForm">\n<div class="table-responsive">\n<table style="width:90%" align="center" class="table table-striped">\n<tbody>\n<tr>\n    <td width="18%">Course Name : <span style="color:red">*</span>:</td>\n    <td width="82%">\n     <input type="text" class="form-control" aria-describedby="sizing-addon1" ng-model="model.cName" placeholder="Username" name="cname" ng-required="true" />\n     <div ng-show="(pForm.cname.$touched && pForm.cname.$invalid)">\n     <small style="color : red; display : block; text-align : center;">Please enter a valid course name</small>\n     </div>\n     </td>\n</tr>\n<tr>\n     <td width="18%">Course Description : <span style="color:red">*</span>:</td>\n         <td width="82%">\n     <textarea type="text" class="form-control" aria-describedby="sizing-addon1" name="cdesc" style="color:black;"  placeholder="Course Description" ng-model="model.cdesc" ng-required="true"></textarea>\n     </td>\n</tr>\n<tr></tr>\n<tr>\n     <td></td>\n     <td><center><input type="submit" class="btn btn-primary btn-lg" value="Add" ng-disabled="pForm.$invalid" />\n      </center></td>\n</tr>\n</tbody>\n</table>\n    </form>\n</center>\n');
$templateCache.put('./app/components/admin/right.html','<font style="color:Blue;"><b>Provide student rankings for course:</b></font>\n<br/><br/>\n<div class="form-group" ng-repeat="x in model.datap track by $index" id="co">\n<form ng-submit="model.rank(x.username,x.course)" name="pForm">\n<font style="color:Blue;">Username : </font>{{x.username}}</p>\n<font style="color:Blue;">Course : </font>{{x.course}}</p>\n<input type="number"  class="form-control" aria-describedby="sizing-addon1" pattern=".{10,}" ng-model="phone" min="1" max="10"  name="phone" style="color:black;"  placeholder="Give Rank" id="rnk" ></input>\n<br/>\n<input type="submit" class="btn btn-primary btn-md" value="Submit Rank"  />\n<hr/>\n</form>\n</div>\n');
$templateCache.put('./app/components/admin/root.html','<div class="row">\n  <div class="col-sm-12">\n    <center><h1><font style="color:Brown;"><b>Student Portal Admin</b></font></h1><br/></center>\n  </div>\n</div>\n<hr/>\n<div class="row">\n  <div class="col-sm-6">\n    <div ui-view=\'leftcontent\'></div>\n  </div>\n  <div class="col-sm-6">\n    <div ui-view=\'rightcontent\'></div>\n  </div>\n</div>\n');
$templateCache.put('./app/components/home/content.html','<div class="row">\n  <div class="col-sm-6">\n    <font style="color:Blue;"><b> Available courses : </b></font>\n    <form  name="pForm">\n      <select name="gender" class="form-control" ng-model="model.gender" ng-options="x for x in model.Gender" ng-required="true"></select>\n      <br/>\n      <center>\n        <input type="button" ng-click="model.enroll()" class="btn btn-primary btn-sm" value="Enroll"/>\n      </center>\n    </form>\n  </div>\n  <div class="col-sm-6">\n    <font style="color:Blue;"><b>Your Course :</b></font>\n    <div class="form-group" ng-repeat="x in model.datap track by $index" id="co">\n      <font style="color:Green;"><b>Course Name : </b></font><font style="color:brown;"><b>{{x.cname}}</b></font>\n      <br/>\n      <font style="color:Green;"><b>Course Description : </b></font><font style="color:brown;"><b>{{x.cdesc}}</b></font>\n      <br/>\n      <a ng-click="model.submit(x.cname)"><input type="button" class="btn btn-primary btn-sm" value="Complete"/></a>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('./app/components/home/footer.html','<div class="row">\n  <div class="col-sm-12">\n    <font style="color:Blue;"><b>Your Course Ranking :</b></font>\n    <div class="table-responsive">\n      <table style="width:90%" align="center" class="table table-striped">\n        <tbody>\n          <tr>\n            <td width="50%">Course</td>\n            <td width="50%">Rank</td>\n          </tr>\n      </tbody>\n    </table>\n    </div>\n    <div ng-repeat="x in model.datapr track by $index">\n      <div class="form-group">\n        <div class="table-responsive">\n          <table style="width:90%" align="center" class="table table-striped">\n            <tbody>\n              <tr>\n                <td width="50%">{{ x.course }}</td>\n                <td width="50%">{{ x.rank }}</td>\n              </tr>\n          </tbody>\n        </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('./app/components/home/header.html','\n<div class="row">\n  <div class="col-sm-12">\n    <center><h1>welcome to Innovision Student Portal</h1><br/></center>\n  </div>\n</div>\n<br/>\n<div class="row">\n  <div class="col-sm-2"><font style="color:Green;"><b>Username : {{model.un}}</b></font></div>\n  <div class="col-sm-8"></div>\n  <div class="col-sm-2">\n    <a ng-click="model.logout()" ><input type="button" class="btn btn-primary btn-sm" value="Logout"/></a>\n  </div>\n</div>\n<br/>\n<hr/>\n');
$templateCache.put('./app/components/home/home.html','<div ui-view=\'content\'></div>\n<div ui-view=\'subcontent\'></div>\n<div ui-view=\'bottomcontent\'></div>\n');
$templateCache.put('./app/components/login/log.html','\n  <div class="row">\n    <div class="col-sm-12">\n      <center><h1>Innovision Student Portal</h1><br/></center>\n    </div>\n  </div>\n  <hr/>\n\n  <font style="color:green;">If your are a returning user please login</font>\n  <div class="row">\n    <form ng-submit="model.login()" name="pFormss">\n      <div class="col-sm-5">\n\n        <input type="text" class="form-control" aria-describedby="sizing-addon1" ng-model="model.userNamel" placeholder="Username" name="unamel" ng-required="true" />\n        <div ng-show="(pForm.unamel.$touched && pForm.unamel.$invalid)">\n          <small style="color : red; display : block; text-align : center;">Please enter a valid user name</small>\n        </div>\n\n      </div>\n      <div class="col-sm-5">\n\n        <input type="password" placeholder="Password" class="form-control" pattern=".{6,24}" aria-describedby="sizing-addon1" ng-model="model.pswdl"  name="pswdl" ng-required="true" />\n        <div ng-show="(pForm.pswdl.$touched && pForm.pswdl.$invalid)">\n          <small style="color : red; display : block; text-align : center;">Password length must be between 6 and 24</small>\n        </div>\n\n      </div>\n      <div class="col-sm-2">\n        <input type="submit" class="btn btn-primary btn-lg" value="Login"  />\n      </div>\n    </form>\n    <font style="color:Red;">{{er}}</font>\n  </div>\n  <br/>\n  <hr/>\n\n  <a ui-sref=\'register\'>Register</a>\n\n  <div ui-view=\'subcontent\'></div>\n');
$templateCache.put('./app/components/login/login.html','<div ui-view=\'content\'></div>\n');
$templateCache.put('./app/components/login/reg.html','\n<div class="row">\n  <div class="col-sm-12">\n    <center>\n      <form ng-submit="createMeetup()" name="pForm">\n        <div class="table-responsive">\n          <table style="width:90%" align="center" class="table table-striped">\n            <tbody>\n              <tr>\n                <td width="18%">User Name <span style="color:red">*</span>:</td>\n                <td width="82%">\n                  <input type="text" class="form-control" aria-describedby="sizing-addon1" ng-model="userName" placeholder="Username" name="uname" ng-required="true" />\n                  <div ng-show="(pForm.uname.$touched && pForm.uname.$invalid) || usernameValid">\n                    <small style="color : red; display : block; text-align : center;">Please enter a valid user name</small>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td width="18%">Password<span style="color:red">*</span>:</td>\n                <td width="82%">\n                  <input type="password" placeholder="Password" class="form-control" pattern=".{6,24}" aria-describedby="sizing-addon1" ng-model="pswd"  name="pswd" ng-required="true" />\n                  <div ng-show="(pForm.pswd.$touched && pForm.pswd.$invalid) || usernameValid">\n                    <small style="color : red; display : block; text-align : center;">Password length must be between 6 and 24</small>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td width="18%">College Name <span style="color:red">*</span>:</td>\n                <td width="82%">\n                  <input type="text" class="form-control" aria-describedby="sizing-addon1" ng-model="cName" placeholder="College Name" name="cname" ng-required="true" />\n                  <div ng-show="(pForm.cname.$touched && pForm.cname.$invalid)">\n                    <small style="color : red; display : block; text-align : center;">Please enter a valid college name</small>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td width="18%">Email<span style="color:red">*</span>:</td>\n                <td width="82%">\n                  <input type="email" class="form-control" placeholder="me@example.com" aria-describedby="sizing-addon1" name="input" ng-model="email" ng-required="true">\n                  <div ng-show="(pForm.input.$touched && pForm.input.$invalid) || pForm.input.$error.email">\n                    <small style="color : red; display : block; text-align : center;">Please enter a valid email</small>\n                  </div>\n                </td>\n              </tr>\n              <tr></tr>\n              <tr>\n                <td></td>\n                <td><center><input type="submit" class="btn btn-primary btn-lg" value="Register" ng-disabled="pForm.$invalid" />\n                </center></td>\n              </tr>\n            </tbody>\n          </table>\n        </form>\n        <font style="color:Red;">{{regerr}}</font>\n      </center>\n    </div>\n  </div>\n</div>\n');}]);