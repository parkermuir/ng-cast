angular.module('video-player', [])
  // .controller('AppCtrl', function(this) {
  //   this.selectVideo = function () {
  //   };
  //   $scope.searchResults = function () {

  //   };
  //   $scope.currentVideo = {};
  //   this.videoList = window.exampleVideoData;
  // })

  .component('app', {
    bindings: {
    },
    controller: function (){
      this.videoList = window.exampleVideoData;
    }
    templateUrl: 'src/templates/app.html'
  });
