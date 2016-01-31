angular.module('starter.controllers', ['services', 'ngRoute'])

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


.controller('DashboardCtrl', function($scope, $state, GameService) {
  
  $scope.games = GameService.all();

  $scope.playGame = function(game) {
        $state.go('app.game_lobby/:gameid', {gameid:game.game_id});
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



.controller('GameCtrl', function($scope, $state, $timeout, GameService, UserService, $routeParams) {
  
  //$scope.game = { game_id: 0, img: "img/hassaan.jpg", opponent: 'Hassaan Ali' };
  $scope.users = UserService.all();
  $scope.game = GameService.get($state.params.gameid);
  $scope.timer = 10;
  var mytimeout;
  
  $scope.init_countdown = function() {
    mytimeout = $timeout($scope.onTimeout, 1000);
  }
  
  $scope.onTimeout = function() {
    if ($scope.timer <= 0) {
      $state.go('app.round');
      $scope.timer = 10;
    } else {
      $scope.timer--;
      mytimeout = $timeout($scope.onTimeout, 1000);
    }
  }
  
  $scope.play = function() {
    $scope.timer = 5;
    $scope.init_countdown();

  }

  $scope.newGame = function() {
    $state.go('app.newgame');
  }
  
  $scope.playGame = function() {
    $state.go('app.game_lobby');
  }

})

.controller('RoundCtrl', function($scope, $state, $timeout, $ionicScrollDelegate, RoundService) {
  
  $scope.input = {
    current_submission : ''
  };
  
  $scope.rounds = RoundService.all();
  //console.log($scope.rounds);
  $scope.round = 0;
  $scope.roundTitle = "Round " + ($scope.round + 1) + " / 5";
  
  $scope.onTimeout = function(){
    if ($scope.rounds[$scope.round].round_time <= 0) {
      $scope.round++;
      $scope.roundTitle = "Round " + ($scope.round + 1) + " / 5";
      if ($scope.round > 4) {
        $state.go('app.results');
      }
    }
    
    $scope.rounds[$scope.round].round_time--;
    mytimeout = $timeout($scope.onTimeout,1000);
  }
  var mytimeout = $timeout($scope.onTimeout,1000);
    
  $scope.calcResults = function(){
    // Iterate through the rounds of this game and calculate scores
    // display the winner
  }

  $scope.submit = function(current_submission) {
    
    current_submission = current_submission.toUpperCase();
    
    if (current_submission != '') {
      //console.log($scope.rounds[$scope.round].synonyms[0]);
      //console.log(current_submission);
      var score = 0;
      if (current_submission in $scope.rounds[$scope.round].synonyms) {
        console.log("YES");
        score = $scope.rounds[$scope.round].synonyms[current_submission];
        $scope.rounds[$scope.round].score += score;
      }
      
      var submission_string = current_submission;
      var score_string = score;
      var foo = {};
      foo[submission_string] = score_string;
      
      $scope.rounds[$scope.round].submissions.push(foo);
      $scope.input.current_submission = "";
      $ionicScrollDelegate.$getByHandle('submissions').scrollBottom();
    }
  }
});