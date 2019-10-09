console.log('Jquery is ready')

$(document().ready(onReady));

function onReady() {
    console.log('jQuery is ready');
    $.ajax({
        url: ' /quotes',
        method: 'GET'
    }).then(function(response) {
        console.log(response);
    }).
}
