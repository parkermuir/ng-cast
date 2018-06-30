angular.module('video-player')
  .service('youTube', function ($http) {
    this.search = (q, callback) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: 'AIzaSyA0E85tG7FMHR5Tp3-sP6VYKxLMMHGQFl4',
          q: q,
          maxResults: 5,
          type: 'video',
          part: 'snippet'
        },
      })
        .then((data) => {
          console.log(data);
          callback(data);
        })
        .catch((err) => {
          console.log('catch function error: ');
          console.log(err);
        });
    };
  });