"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const publicKey = new web3_js_1.PublicKey("4bCtf9EMjHUFUs8hoyka2Jq2DazpNs18ikqcYNzDozaK");
const connection = new web3_js_1.Connection("https://api.mainnet-beta.solana.com", "confirmed");
// Processed < Confirmed < Finalized (In terms of Security and vice-versa for time)
const getBalance = (address) => __awaiter(void 0, void 0, void 0, function* () {
    const balanceInLamports = yield connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / web3_js_1.LAMPORTS_PER_SOL;
    console.log(`💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`);
});
getBalance(publicKey);
