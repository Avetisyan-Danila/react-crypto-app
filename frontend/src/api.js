import { cryptoAssets } from "./data.js";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": "VqsTATiLaqms9GxTjQdqXIIwJd0ytcxcCEogIsV5lAk=",
  },
};

export function fetchCrypto() {
  return fetch("https://openapiv1.coinstats.app/coins", options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

export function fetchAssets() {
  return cryptoAssets;
}
