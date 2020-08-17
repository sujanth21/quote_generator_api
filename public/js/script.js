// Getting DOM Elements
const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");
const loader = document.querySelector("#loader");

const loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const complete = () => {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
};

//Local: http://localhost:3000/api/v1/quotes/random
const proxyURL = "https://suj-proxy-server.herokuapp.com/";
const api_url =
  "https://suj-quote-generator.herokuapp.com/api/v1/quotes/random";

const getRandomQuoteAndManipulateDOM = async () => {
  loading();
  try {
    const response = await fetch(api_url);
    const { data } = await response.json();

    console.log(data);

    //Manipulate DOM Elements
    if (data.quoteAuthor === "") {
      quoteAuthor.textContent = "Anonymous";
    } else {
      quoteAuthor.textContent = data.quoteAuthor;
    }

    if (data.quoteText.length > 50) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }

    quoteText.textContent = data.quoteText;
    complete();
  } catch (err) {
    console.log(err);
  }
};

const tweetQuote = () => {
  const quote = quoteText.textContent;
  const author = quoteAuthor.textContent;
  const twitterURL = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterURL, "_blank");
};

//Event listeners
twitterBtn.addEventListener("click", (e) => {
  tweetQuote();
});

newQuoteBtn.addEventListener("click", (e) => {
  getRandomQuoteAndManipulateDOM();
});

getRandomQuoteAndManipulateDOM();
