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

.controller('RoundCtrl', function($scope, $state, $timeout, $ionicScrollDelegate) {
  
  $scope.input = {
    current_submission : ''
  };
  
  $scope.rounds = [
    {
      round_time: 20,
      word: "FAST",
      score: 0,
      synonyms: {
        "AGILE": 15,
        "BRISK": 15,
        "QUICK": 15,
        "RAPID": 15,
        "SWIFT": 15,
        "FLEETING": 15,
        "HURRIED": 10,
        "ACTIVE": 8
      },
      submissions: []
    },
    {
      round_time: 20,
      word: "CLUMSY",
      score: 0,
      synonyms: {
        "INEPT": 15,
        "BULKY": 15,
        "CRUDE": 15,
        "BLUNDERING": 15,
        "UNGAINLY": 15,
        "UNWIELDLY": 15,
        "AWKWARD": 11,
        "BUMBLING": 10,
        "INCOMPETENT": 12,
        "INELEGANT": 12,
        "BUNGLING": 8,
        "UNABLE": 4
      },
      submissions: []
    },
    {
      round_time: 20,
      word: "STUPID",
      score: 0,
      synonyms: {
        "DULL": 15,
        "DUMB": 15,
        "FOOLISH": 15,
        "FUTILE": 15,
        "IRRELEVANT": 15,
        "LUDICROUS": 15,
        "NAIVE": 11,
        "BUMBLING": 8,
        "SENSELESS": 8,
        "SIMPLE": 10,
        "TRIVIAL": 8,
        "ABSURD": 13,
        "IGNORANT": 12,
        "UNINTELLIGENT": 6,
        "DIM": 4,
        "IDIOTIC": 12
      },
      submissions: []
    },
    {
      round_time: 20,
      word: "ATHLETIC",
      score: 0,
      synonyms: {
        "ACTIVE": 15,
        "ENERGITIC": 15,
        "MUSCULAR": 15,
        "POWERFUL": 12,
        "STRONG": 12,
        "VIGOROUS": 8,
        "BRAWNY": 11,
        "FIT": 10
      },
      submissions: []
    },
    {
      round_time: 20,
      word: "HAPPY",
      score: 0,
      synonyms: {
        "CHEERFUL": 15,
        "CONTENTED": 15,
        "DELIGHTED": 15,
        "ECSTATIC": 15,
        "ELATED": 15,
        "GLAD": 15,
        "JOYFUL": 11,
        "JOYOUS": 8,
        "JUBILANT": 8,
        "LIVELY": 10,
        "MERRY": 8,
        "OVERJOYED": 13,
        "PEACEFUL": 12,
        "PLEASANT": 6,
        "PLEASED": 11,
        "THRILLED": 7,
        "BLESSED": 4,
        "CONTENT": 7,
        "GAY": 15,
        "GLEEFUL": 12,
        "JOLLY": 12
      },
      submissions: []
    }
  ]

  $scope.round = 0;
  $scope.roundTitle = "Round " + ($scope.round + 1);
  
  $scope.onTimeout = function(){
    if ($scope.rounds[$scope.round].round_time <= 0) {
      $scope.round++;
      if ($scope.round > 4) {
        $state.go('app.dashboard');
      }
    }
    $scope.rounds[$scope.round].round_time--;
    mytimeout = $timeout($scope.onTimeout,1000);
  }
  var mytimeout = $timeout($scope.onTimeout,1000);
    
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
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
