import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./App";
import {format} from "path";
import {BrowserRouter} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51PLAAtBGnysm7CEsWZi68ht7RWkvS2kH4IsqkGdPDnxBhdrgQv6DLZROmPYzPIsTBM8Pzb2947xUIdkBa7m0A8sT00spCbnTbr');


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>
);
