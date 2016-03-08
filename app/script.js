$(window).load(function() {
    if (localStorage['login'] == 'false') {
        window.location.href = 'index.html';
    }
    $('.page-header h1 span').text(localStorage['name'] + "'s Account");
});
$('.logout').on('click', function() {
    localStorage['login'] = false;
    window.location.href = 'index.html';
});
$(function() {
    $('#star-rating').rating(function(vote, event) {
        // we have vote and event variables now, lets send vote to server.
        $.ajax({
            url: "/get_votes.php",
            type: "GET",
            data: { rate: vote },
        });
    });
});
$(function() {
    $.chat({
        // your user information
        userId: 1,
        // id of the room. The friends list is based on the room Id
        roomId: 1,
        // text displayed when the other user is typing
        typingText: ' is typing...',
        // title for the rooms window
        roomsTitleText: 'Rooms',
        // title for the 'available rooms' rab
        availableRoomsText: 'Available rooms',
        // text displayed when there's no other users in the room
        emptyRoomText: "There's no one around here. You can still open a session in another browser and chat with yourself :)",
        // the adapter you are using
        chatJsContentPath: '/basics/chatjs/',
        adapter: new DemoAdapter()
    });
});
