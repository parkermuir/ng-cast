angular.module('video-player')
  .component('videoPlayer', {
    controller: 'AppCtrl',
    bindings: {
      video: '<',
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
