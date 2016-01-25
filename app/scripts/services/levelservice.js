'use strict';

/**
 * @ngdoc service
 * @name tilesApp.levelService
 * @description
 * # levelService
 * Service in the tilesApp.
 */
angular.module('tilesApp')
  .service('levelService', function () {
    
    function getLevel (nLevel) {
      //TODO: load a real level from somewhere

      var level = {
        colors: [1,2,3],
        tiles: [],
        pointer: 0,        
        height: 3,
        width: 4
      };

      level.tiles = generateRandomTiles(level.colors.length, level.height, level.width);

      return level;

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


    return {
      getLevel: getLevel
    };

  });
