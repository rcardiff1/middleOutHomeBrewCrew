$(function() {
  $('a[rel=tipsy]').tipsy({fade: true, gravity: 'n'});
});

function youtubeSearch(searchItem) {
  $.ajax({
    'url': "/searchYoutube",
    'type': 'GET',
    'data': {'searchItem': searchItem},
    }).done( function(data) {
      $('#search-results').empty();
      $.each( data.items, function(i, item ) { 
        var vidId = item.id.videoId;
        var vidImage = item.snippet.thumbnails.medium.url; 
        var vidDescription = ''+item.snippet.description.slice(0, 30)+'..';
        appendVideoImage(vidId, vidImage, vidDescription);
      });
    });
}


// append youtube song list to left-side container 
function appendVideoImage(videoId, videoImage, vidDescription) {
  console.log(vidDescription);
  $('#search-results').append('<p id="' + videoId + '"><img class="thisTestA" src="' + videoImage +'" original-title="'+vidDescription+'" height="70"></p>');
  $('.thisTestA').tipsy();
}

// search youtube button
$('#search-btn').on('click', function(event) {
  $('#search-results-container').show();
  var searchVal = $('#youTubeSearchInput').val();
  youtubeSearch(searchVal);
});

$('#saved-results-container').hide();
$('#show-searched-results-btn,#show-saved-results-btn').click(function(){
    $('#search-results-container,#saved-results-container').toggle();
});

// Movie Button Controls
function muteVideo() {
  if(socket.player) {
    socket.player.mute();
    $('.mute').show();
  }
}

function unMuteVideo() {
  if(socket.player) {
    socket.player.unMute();
    $('.mute').hide(); 
  }
}

$('#volume').change(function() {
  var volVal = $('#volume').val();
  // console.log(volVal, "volume value");
  setVolume(volVal);
});

function setVolume(value) {
  if(socket.player) {
    socket.player.setVolume(value);
    console.log(socket.player.B, "player");
    console.log(socket.player.getVolume(), "yt volume");
  }
}
