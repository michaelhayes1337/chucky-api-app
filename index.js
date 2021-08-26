
const axios = require("axios");
const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();


app.get("/", (req, res) => {
  res.send("The joke server");
});

app.get("/joke/random", async (req, res) => {
  const response = await axios(
    "https://api.chucknorris.io/jokes/random"
  ).catch((err) => console.log(err));
  if (!response) {
    return res.status(400).send("Failure");
  }
  res.status(200).send(response.data.value);
});

app.get("/joke/categories", async (req, res) => {
  const response = await axios(
    "https://api.chucknorris.io/jokes/categories"
  ).catch((err) => console.log(err));
  if (!response) {
    return res.status(400).send("Failure");
  }
  res.status(200).json({ success: true, data: response.data });
});

app.get("/joke/category/:category", async (req, res) => {
  const { category } = req.params;
  const response = await axios(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  ).catch((err) => console.log(err));
  res.status(200).send(response.data.value);
});

app.get("/api", (req, res) => {
    res.json({ message: "Joke Server" });
  });
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});