import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Home Page (Form)
app.get("/", (req, res) => {
  res.render("index.ejs", { data: null, error: null });
});

// Handle API Call
app.post("/check-price", async (req, res) => {
  const crypto = req.body.crypto;     // bitcoin, ethereum, solana…
  const currency = req.body.currency; // usd, inr…

  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}&include_24hr_change=true`;

    const response = await axios.get(url);

    const price = response.data[crypto][currency];
    const change = response.data[crypto][`${currency}_24h_change`];

    const result = {
      crypto,
      currency,
      price,
      change: change.toFixed(2),
    };

    res.render("result.ejs", { data: result, error: null });

  } catch (err) {
    console.error("API Error:", err.message);

    res.render("index", {
      data: null,
      error: "Failed to fetch crypto data. Try again later."
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
