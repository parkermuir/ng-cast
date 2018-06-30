angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<',
      result: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
