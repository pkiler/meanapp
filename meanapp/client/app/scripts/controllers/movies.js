'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function () {
    $scope.movies = [
    {
    	title: 'A New Hope',
    	url: 'http://youtube.com/embed/1g3_CFmnU7k'
    }
    ];
 });
