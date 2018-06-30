angular.module('video-player')
  .controller('AppCtrl', function() {
    this.videoList = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
  })

  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'
  });
