function generate() {
    var quotes = {
        "- W. C. Fields": '"I  am free of all prejudices. I hate everyone equally."',
        "- Confucius": '"The more man meditates upon good thoughts, the better will be his world and the world at large."',
        "- Socrates": '"True knowledge exists in knowing that you know nothing."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}