angular.module('video-player')
.component('videoPlayer', {
    binding: {
      current: '<',
    },
    templateUrl: '/src/templates/videoPlayer.html'
  });
