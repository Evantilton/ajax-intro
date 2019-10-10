console.log('Jquery is ready')

$(document).ready(onReady);

function onReady() {
    console.log('in onReady')
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
            type: 'GET',
            url: '/new-quotes'
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
}