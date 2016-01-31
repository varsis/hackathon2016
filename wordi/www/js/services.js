angular.module('services', [])

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.factory('GameService', function() {
  var games = [
      { game_id: 0, img: "img/hassaan.jpg", opponent: 'Hassaan Ali' },
      { game_id: 1, img: "img/ionic.png", opponent: 'Chris Pav' },
      { game_id: 2, img: "img/ionic.png", opponent: 'Joe Rogan' },
      { game_id: 3, img: "img/ionic.png", opponent: 'Emily Blunt' }
  ];

  return {
    all: function() {
      return games;
    },
    remove: function(games) {
      games.splice(games.indexOf(game), 1);
    },
    get: function(gameId) {
        return games[gameId];
     }
  };
})

.factory('RoundService', function() {
  var rounds = [
    {
      round_time: 20,
      word: "FAST",
      sentence: "Hussein Bolt is very fast.",
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
      sentence: "Hassaan is a clumsy programmer.",
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
      sentence: "Everyone can agree, Python is a stupid language.",
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
      sentence: "Mike is extremely athletic and good-looking.",
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
      sentence: "When writing C, I need to visit my happy place often.",
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
  ];

  return {
    all: function() {
      return rounds;
    },
    remove: function(rounds) {
      rounds.splice(rounds.indexOf(round), 1);
    },
    get: function(roundId) {
      for (var i = 0; i < rounds.length; i++) {
        if (rounds[i].id === parseInt(roundId)) {
          return rounds[i];
        }
      }
      return null;
    }
  };
});