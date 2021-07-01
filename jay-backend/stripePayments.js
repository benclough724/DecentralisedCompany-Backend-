const express = require("express");
const app = express();
const stripe = require("stripe")("pk_test_51IwET4BYP4uyA6T09cmrvFIor8UTwkO6FI1RhNt7J6MlBbBD93r1XCS6xxoqGfCcgNI8uXcmHZbUQiQMua5qddZT00pEWnax61");

app.use(express.static("."));
app.use(express.json());

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 10;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "gbp"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.listen(4242, () => console.log('Node server listening on port 4242!'));
