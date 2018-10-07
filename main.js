$(document).ready(function() {


    results();
    $('#refresh').click(() => {
        $('#searchInput').val('');
        $('#content').children().remove();
    });
});

function results() {
    $('#hitSearch').click(function(callback) {
        $('#contentItem').remove();
        var searchVal = $('#searchInput').val();

        if (searchVal) {

            $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + encodeURI(searchVal) + "&callback=?", function(data) {

                display(data);
            });


        }
    })


    $("#searchInput").keypress(function(e) {
        if (e.which == 13) {
            $("#hitSearch").click();
            return false;
        }
    });
}

function display(data) {
    for (var i = 0; i < data[1].length; i++) {
        $('#content').append("<div id='content__item'>" + data[1][i] + "</div><div id='content__item'>" + data[2][i] + "</div><div id='content__item'><a href='" + data[3][i] + "' target='_blank'>" + data[3][i] + "</a>  </div>");
        console.log(data[2][i]);
        console.log(data[3][i]);
    }
}