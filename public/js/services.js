angular.module('ChordServices', ['ngResource'])

.factory('ChordAPI', ['$resource', function($resource){
	//return $resource('https://chords-api-app.herokuapp.com/:type/:note/:modifier', {}, {
	return $resource('localhost/:type/:note/:modifier', {}, {
    get: {params:{type:'guitar',note:'A',modifier:'major'}, isArray: false}
  });
}]);