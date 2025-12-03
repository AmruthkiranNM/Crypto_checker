Crypto Price Checker

This is a Node.js + Express web application that allows users to check the current price and 24-hour price change of popular cryptocurrencies such as Bitcoin, Ethereum, Solana, and Dogecoin in currencies like USD and INR.

The app uses the CoinGecko Public API (no API key required) and displays results using EJS templates with a modern UI.

Features
Select a cryptocurrency (BTC, ETH, SOL, DOGE)
Select a fiat currency (USD or INR)
Fetch real-time crypto prices using CoinGecko API

Display:
Current price
24-hour percentage change
Trend indicator (📈 or 📉)
Modern, clean user interface
Error handling for failed API requests

Project Structure
crypto-checker/
│── index.js
│── package.json
│── public/
│   └── styles.css
│── views/
│   ├── index.ejs
│   └── result.ejs
│── README.md

Technologies Used
Node.js
Express.js
Axios
EJS
HTML & CSS
CoinGecko Public API

Installation and Setup
1. Clone the repository
git clone <your-repository-url>
cd crypto-checker

2. Install dependencies
npm install

3. Start the server
Using Node:
npm start

Or using Nodemon (auto-restart):
npm run dev

4. Open the app
Visit:
http://localhost:3000

API Used
CoinGecko Simple Price API

https://api.coingecko.com/api/v3/simple/price
?ids=bitcoin,ethereum,solana,dogecoin
&vs_currencies=usd,inr
&include_24hr_change=true


No API key is required.

How the App Works
User selects a cryptocurrency and a currency.
The app sends a POST request to /check-price.
The server calls the CoinGecko API using Axios.

The API returns:
Current price
24-hour price change
The result is shown in a styled EJS template.
User can return and check another coin.
Error Handling
If the API request fails:
An error message is shown on the screen.
The server logs the error internally.

License
This project is created for educational purposes as a capstone project for API integration using Express.js.

Author
Amruth kiran N M