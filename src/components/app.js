angular.module('video-player')
  .controller('AppCtrl', function() {
    this.videoList = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.changeVideo = (input) => {
      this.currentVideo = input;
      console.log('current vid: ', this.currentVideo);
    };
  })

  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'
  });
