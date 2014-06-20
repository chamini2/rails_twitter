$(document).ready (function() {
    $('#micropost_content').keyup(function() {
        $('#count').text((140 - $(this).val().length) + ' characters left');
    });
})
