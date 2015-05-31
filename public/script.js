function getVideos() {
  $.ajax({
    type: 'GET',
    url: '/videos'
    datatype: 'json'
  }).done(function(data){
    $.each(data, function(index, video) {
      appendNewVideo(video);
    })
  })
}

function createVideo() {
  console.log('createVideo');
}