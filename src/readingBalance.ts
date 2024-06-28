import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
const getBalance = async (address: PublicKey) => {
    const balance = await connection.getBalance(address);
    console.log(`The balance of the account at ${address} is ${balance} lamports`);
    console.log(`The balance of the account at ${address} is ${balance! / 10 ** 9} SOL`);
}

getBalance(address);