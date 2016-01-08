var socket = io();
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//declare a global for our playlist
var clickedSong;

//doesn't allow users to interact w/ submissions until "signed in"
$('#chatForm').hide();
$('#room').hide();
$('#name').focus();
$('#player').hide();
$('#playerControls').hide();
// $('#url').prop('disabled',true);
// $('#urlSub').prop('disabled',true);

$('#search-results').click(function(event) {
  var idVal = $(event.target).parent().attr('id');
  socket.emit('url submit', idVal);

  clickedSong = $(event.target).parent();
});

$('#saveToPlaylist').on('click', function() {
  console.log('image', clickedSong.context.src);
  console.log('clickedSong', clickedSong);
  var playlistEntry =$('<p id="' + clickedSong.attr('id') + '"><img src="' + clickedSong.context.src +'" height="70"></p>').hide().fadeIn(4000);  ;
/***********/
  $('#saved-results').append(playlistEntry);
/***********/
  console.log('clickedSong', playlistEntry);

}); 
// function appendPlaylist(videoId, videoImage, vidDescription) {
//   var pics = $('<p id="' + videoId + '" original-title="'+vidDescription+'"><img src="' + videoImage +'" height="70"></p>').hide().fadeIn(4000); 
//   $('#search-results').append(pics); 
//   $('#'+videoId).tipsy();
// }


socket.on('url submit', function(idVal){
  $('#player').remove();
  $('.videoPlayer').append('<div id="player">');
  var player = new YT.Player('player', {
    videoId : idVal,
    playerVars: { 
      'autoplay': 0, 
      'controls': 0, 
      'disablekb': 0
    }
  });
  // console.log('playing in YTplayer', clickedSong);
  socket.player = player;
  socket.url = idVal;
  // console.log(player);
});

//play video event
$('#playVid').on('click', function() {
  socket.emit('play video');
});

socket.on('play video', function(){
  socket.player.playVideo();
  // console.log(socket.player.getCurrentTime(), socket.url);
});

//pause video event
$('#pauseVid').on('click', function() {
  socket.emit('pause video');
});

socket.on('pause video', function() {
  socket.player.pauseVideo();
});



socket.on('new connection', function () {
//this occurs before new player;
console.log(!socket.player);
  if(!socket.player){
    return;
  }
  socket.emit('new connection res', {
    url: socket.url,
    time: socket.player.getCurrentTime()
  });
});

socket.on('new connection res', function(obj) {
  var time = Math.floor(obj.time); 
  console.log(time);
  setTimeout( 
    function(){
      var player = new YT.Player('player', { 
        videoId: obj.url,
        playerVars: { 
          'start': time,
          'autoplay' : 1,
          'controls' : 0
        } 
      });
      if(!socket.player) {
        socket.player = player;
      }
    },100);
});

// BEGIN CHAT CONTROLS
//--------------

//emit message to other sockets
$('#chatForm').submit(function() {
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});

// join the server upon submitting a username
$('#join').click(function() {
  var name = $('#name').val();
  if (name != '') {
    socket.emit('join', name);
    ready = true;
    $('#chatForm').show();
    $('#room').show();
    $('#m').focus();
    $('#player').show();
    $('#playerControls').show();
    $('#joinChat').hide();
    $('#url').prop('disabled',false);
    $('#urlSub').prop('disabled',false);
  }
});

$('#name').keypress(function(e) {
  if (e.which == 13) {
    //e.which is the keynumber
    var name = $('#name').val();
    if (name != '') {
      socket.emit('join', name);
      ready = true;
      $('#chatForm').show();
      $('#room').show();
      $('#m').focus();
      $('#player').show();
      $('#playerControls').show();
      $('#joinChat').hide();
      $('#url').prop('disabled',false);
      $('#urlSub').prop('disabled',false);
      return false;
    }
  }
});

// update notice informing local user of join (only shown to local user)
socket.on('update', function(msg) {
  if (ready) {
    $('#messages').append($('<li>').text(msg));
  }
});

// update notice informing remote user of join/leave (shown to all users)
socket.on('update-people', function(people) {
  if (ready) {
    $('#people').empty();
    $.each(people, function(clientid,name) {
      $('#people').append($('<li>').text(name));
    });
  }
});

//on event, add messages to chat box
socket.on('chat message', function(who,msg) {
  if (ready) {
    $('#messages').append($('<li>').html('<strong>' + who + ': ' + '</strong>' + msg));
  }
});

// Autoscroll chat
window.setInterval(function() {
  var elem = document.getElementById('messages');
  elem.scrollTop = elem.scrollHeight;
}, 5000);
