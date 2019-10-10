console.log('Jquery is ready')

$(document).ready(onReady);

function onReady() {
    console.log('in onReady')
    doThing();
    $('#button').on('click', addquote);
    //     $.ajax({
    //         type: 'GET',
    //         url: '/quotes'
    //     });
    //     $.ajax({
    //         type: 'GET',
    //         url: '/new-quotes'
    //     }).then(function (response) {
    //         for (let i = 0; i < response.length; i++) {
    //             let quotes = response[i];
    //             $('#quotesTable').append(`
    //                 <tr>
    //                     <td>${quotes.quote}</td>
    //                 </tr>
    //             `);
    //         }
    //     });
    // }

    function addquote() {
        console.log("click")
        $.ajax({
            url: '/new-quotes',
            type: 'POST',
            data: {
                quote: $('#inputQuote').val(),
                author: $('#inputAuthor').val()
            }
        });
        $.ajax({
            type: 'GET',
            url: '/quotes'
        }).then(function (response) {
            $('#quoteTable').empty();
            for (let i = 0; i < response.length; i++) {
                let quotes = response[i];
                $('#quoteTable').append(`
                <tr>
                    <td>${quotes.quote}</td>
                </tr>
            `);
            }
        });
    }
    function doThing() {
        console.log('doing the thing')
        $.ajax({
            type: 'GET',
            url: '/quotes'
        }).then(function (response) {
            $('#quoteTable').empty();
            for (let i = 0; i < response.length; i++) {
                let quotes = response[i];
                $('#quoteTable').append(`
                <tr>
                    <td>${quotes.quote}</td>
                    <td>${quotes.author}</td>
                </tr>
            `);
            }
        });
    }
}
// .then(function() {
//     getAllQuotes();
// })
// get is for getting information, client getting from server
//post is for posting information, client posting information from server
// method: 'POST'
// 
// app.POST instead of app.get
// this needs to show the whole thing