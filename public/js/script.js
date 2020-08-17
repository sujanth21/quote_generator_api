// Getting DOM Elements
const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector("#author");

//Local: http://localhost:3000/api/v1/quotes/random

const api_url =
  "https://suj-quote-generator.herokuapp.com/api/v1/quotes/random";

const getRandomQuote = async () => {
  const response = await fetch(api_url);
  return response.json();
};

getRandomQuote()
  .then((response) => {
    console.log(response.data);
    quoteText.textContent = response.data.quoteText;
    quoteAuthor.textContent = response.data.quoteAuthor;
  })
  .catch((error) => {
    console.log(error);
  });
