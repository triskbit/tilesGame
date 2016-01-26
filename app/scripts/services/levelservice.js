'use strict';

/**
 * @ngdoc service
 * @name tilesApp.levelService
 * @description
 * # levelService
 * Service in the tilesApp.
 */
angular.module('tilesApp')
  .service('levelService', function ($http) {

    var levels = [];

    /*
    function getLevels () {

      var httpRequest = $http({
            method: 'GET',
            url:'mocks/levels.json'
        }).success(function (data, status) {
            levels = data;
      });
    };

    getLevels();
    */

    function getNextLevel (nLevel) {
      //TODO: load a real level from somewhere
      /*
      var level = {
        colors: [1,2,3],
        tiles: [],
        pointer: 0,
        height: 3,
        width: 4
      };

      level.tiles = generateRandomTiles(level.colors.length, level.height, level.width);
      */

      console.log(levels);

      if(levels.length <= nLevel){
        return null;
      }

      return levels[nLevel];

    }

    function generateRandomTiles(colors, height, width){
      var tiles = [];

      for(var i=0; i < height; i++){
        tiles[i] = [];
        for(var j=0; j < width; j++){
          tiles[i][j] = Math.floor((Math.random() * colors)) + 1;
        }
      }

      return tiles;

    }



    levels =
      [
        {
      number: 1,
      colors: [1,2],
      tiles: [
          [1,1],
          [2,2]
        ],
      pointer: 0,
      height: 2,
      width: 2
    },
    {
      number: 2,
      colors: [1,2],
      tiles: [
          [1,1,1],
          [2,2,2],
          [1,1,1]
        ],
      pointer: 0,
      height: 3,
      width: 3
    },
    {
      number: 3,
      colors: [1,2],
      tiles: [
          [2,1,1],
          [1,2,1],
          [1,1,2]
        ],
      pointer: 0,
      height: 3,
      width: 3
    },
    {
      number: 4,
      colors: [1,2],
      tiles: [
          [1,1,1,1],
          [2,2,2,2],
          [2,2,2,2],
          [1,1,1,1]
        ],
      pointer: 0,
      height: 4,
      width: 4
    }
      ]



    return {
      getNextLevel: getNextLevel
    };

  });
