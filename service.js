angular.module('userProfiles').service('mainService', function($http) {

  this.getUsers = function() {
		return $http.get('https://regres.in/api/users?page=1');
  };


});
