function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
    progressBarScroll();
};



const quoteBox = document.querySelector('#quote-box');
const currentQuote = document.querySelector('#text');
const currentAuthor = document.querySelector('#author');
const newQuote = document.querySelector('#new-quote');

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const jsonRawData = this.responseText;
            const data = JSON.parse(jsonRawData);
            const quotes = data.quotes;

            let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            let getAuthor = randomQuote.author;

            let getQuote = randomQuote.quote;
            currentQuote.innerHTML = `"${getQuote}"`;
            currentAuthor.innerHTML = getAuthor;

        }

    };
    xhttp.open("GET", "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", true);
    xhttp.send();

}


loadDoc();


newQuote.addEventListener('click', loadDoc);
