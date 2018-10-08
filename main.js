$(document).ready(function() {
    $('#hitSearch').click(results);
    $('#refresh').click(clearSearch);

});


function clearSearch() {

    $('#searchInput').val('');
    $('#content').children().remove();

}

function results() {

    $('#content').children().remove();
    var searchVal = $('#searchInput').val();

    if (searchVal) {
        console.log('doing...');
        $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + encodeURI(searchVal) + "&callback=?", function(data) {

            display(data);
        });


    }



    $("#searchInput").keypress(function(e) {
        if (e.which == 13) {
            $("#hitSearch").click();
            return false;
        }
    });
}

function display(data) {
    for (var i = 0; i < data[1].length; i++) {
        $('#content').append("<div class='content__item'><div class='title'>" + data[1][i] + "</div><div class='description'>" + data[2][i] + "</div><div id='article__link'><a href='" + data[3][i] + "' target='_blank'>Read More</a>  </div></div>");
        console.log(data[2][i]);
        console.log(data[3][i]);
    }
}