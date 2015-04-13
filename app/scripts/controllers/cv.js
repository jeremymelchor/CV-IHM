'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('CVCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('data/donnees.json').
      success(function(data) {
        $scope.name = data.personne.prenom+" "+data.personne.nom;
        $scope.apropos = data.personne.apropos;
        $scope.email = data.personne.email;
        $scope.telephone = data.personne.telephone;
        $scope.whatIdo = data.personne.whatIdo;
        $scope.age = data.personne.age;

        $scope.experiences = data.experiences;

        $scope.education = data.education;

        $scope.projets = data.projets;

        $scope.skills = data.skills;
      })
  });


