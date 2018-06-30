angular.module('video-player')
  .component('videoListEntry', {
    controller: 'AppCtrl',
    bindings: {
      video: '<',
      onClick: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });

