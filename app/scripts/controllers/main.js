'use strict';

/**
 * @ngdoc function
 * @name tilesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tilesApp
 */
angular.module('tilesApp')
  .controller('MainCtrl', function ($scope, levelService) {

    initBoard();

    $scope.colorClick = function (color) {

      if($scope.board.pointer < ($scope.board.width * $scope.board.height) ){

        var x = Math.floor($scope.board.pointer / $scope.board.width);
        var y = $scope.board.pointer % $scope.board.width;

        if(checkColor(x,y,color)){
          $scope.board.tiles[x][y] = color;
        }
        else {
          $scope.board.tiles[x][y] = 100;
          $scope.board.errors ++;
        }

        $scope.board.pointer ++;

      }

    };

    $scope.gameEnd = function () {
      if($scope.board.pointer >= ($scope.board.width * $scope.board.height) ){
        return true;
      }
      return false;
    };

    $scope.getPointerFromXY = function (x,y) {
      //console.log(y * $scope.board.width + x);
      //return y * $scope.board.width + x;
      return "selected-tile";
    };

    function initBoard () {
      $scope.level = levelService.getNextLevel(1);
      console.log($scope.level);
      $scope.board = {
        colors: $scope.level.colors,
        tiles: [],
        pointer: $scope.level.pointer,
        height: $scope.level.height,
        width: $scope.level.width,
        errors: 0
      };

      $scope.board.tiles = [];

      for(var i=0; i < $scope.board.height; i++){
        $scope.board.tiles[i] = [];
        for(var j=0; j < $scope.board.width; j++){
          $scope.board.tiles[i][j] = 0;
        }
      }

      $scope.columns = 12 / $scope.board.width;

      //TODO: fix this ASAP
      $scope.w = [];
      for(i=0; i<$scope.board.width; i++){
        $scope.w[i] = i;
      }

      $scope.h = [];
      for(i=0; i<$scope.board.height; i++){
        $scope.h[i] = i;
      }


    }

    function checkColor(x,y,color) {
      return $scope.level.tiles[x][y] === color;
    }


  });
