angular.module('video-player')
  .controller('AppCtrl', function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = (input) => {
      this.currentVideo = input;
      console.log('current vid: ', this.currentVideo);
    };
    this.searchResults = (q) => {
      console.log('ran search q = ', q);
      youTube.search(q, (data) => {
        this.videos = data.data.items;
      });
    };
    
  })

  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'
  });
