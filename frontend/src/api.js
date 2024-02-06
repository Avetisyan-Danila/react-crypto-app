import { cryptoData, cryptoAssets } from "./data.js";

export function fetchCrypto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(cryptoData);
    }, 2000);
  });
}

export function fetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(cryptoAssets);
    }, 2000);
  });
}
