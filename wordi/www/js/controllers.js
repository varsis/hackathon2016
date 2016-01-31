angular.module('starter.controllers', ['services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('DashboardCtrl', function($scope, $state) {
  
  $scope.games = [
      { game_id: 0, img: "img/hassaan.jpg", opponent: 'Hassaan Ali' },
      { game_id: 1, img: "img/ionic.png", opponent: 'Chris Pav' },
      { game_id: 2, img: "img/ionic.png", opponent: 'Joe Rogan' },
      { game_id: 3, img: "img/ionic.png", opponent: 'Emily Blunt' }
    ];
    
    $scope.playGame = function() {
        $state.go('app.game_lobby');
    }
  
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login Successful!',
                template: 'Please check your credentials!'
            });        
          }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('GameCtrl', function($scope, $state) {
  
  $scope.game = { game_id: 0, img: "img/hassaan.jpg", opponent: 'Hassaan Ali' };
  
  $scope.play = function() {
    $state.go('app.round');
  }
  
})

.controller('RoundCtrl', function($scope, $timeout, $ionicScrollDelegate) {
  
  $scope.input = {
    current_submission : ''

  };
  
  $scope.rounds = [
    {
      round_time: 12,
      word: "INSECT",
      score: 0,
      synonyms: [],
      submissions: []
    }
  ]

  $scope.round = 0;
  $scope.timer = $scope.rounds[$scope.round].round_time;
  $scope.word = $scope.rounds[$scope.round].word;
  $scope.score = $scope.rounds[$scope.round].score;
  $scope.submissions = $scope.rounds[$scope.round].submissions;
  
  $scope.onTimeout = function(){
    if ($scope.timer <= 0) {
      $scope.timer = $scope.rounds[$scope.round].round_time;
    }
    $scope.timer--;
    mytimeout = $timeout($scope.onTimeout,1000);
  }
  var mytimeout = $timeout($scope.onTimeout,1000);
    
  $scope.submit = function(current_submission) {
    if (current_submission != '') {
      $scope.submissions.push(current_submission);
      $scope.input.current_submission = "";
      $ionicScrollDelegate.$getByHandle('submissions').scrollBottom();
    }
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
