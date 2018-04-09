(function($) {
    var armoryURL = "https://worldofwarcraft.com/en-gb/character/kazzak/"
    $.getJSON('https://untamedmembers.herokuapp.com/users', function(data) {
        var players = data;
        players.forEach(function(player) {
            $('#team-list').append('<li class="playerlist-item"><a href="'+ armoryURL + player.name +'" class="player-link ' + player.class +'">'+ player.name +'</a></li>')  
        }); 
    });
})(jQuery); 