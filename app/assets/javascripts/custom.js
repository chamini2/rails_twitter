$(document).ready (function() {
    $('#compose').keyup(function() {
        $('#count').text((140 - $(this).val().length) + ' characters left');
    });
})
