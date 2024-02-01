$(document).ready(function() {
    $(".icon").hover(function() {
        $(this).toggleClass("scale");
    })
})


let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/christian-mcnachtan/repos', true)

request.onload = function() {
    let data = JSON.parse(this.response);

    let statusHTML = '';

    $.each(data, function(i, status) {
        statusHTML += '<tr>';
        statusHTML += '<td>' + status.name + '</td>';
        statusHTML += '<td><a target="_blank" href="' + status.html_url + '">' + status.html_url + '</a></td>';
        statusHTML += '</tr>';
    });

    $('tbody').html(statusHTML);
}

request.send();