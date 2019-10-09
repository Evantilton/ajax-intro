let express = require('express')
const PORT = 5000
const app = express();

let quotesData = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

app.use(express.static('server/public'))

app.get('/quotes', (req, res) => {
    res.send(quotesData);
});

app.listen(PORT, () => {
    console.log("listening at port 5000");
});


