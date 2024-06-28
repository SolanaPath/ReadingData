import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("4bCtf9EMjHUFUs8hoyka2Jq2DazpNs18ikqcYNzDozaK");

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
// Processed < Confirmed < Finalized (In terms of Security and vice-versa for time)

const getBalance = async (address: PublicKey) => {
    const balanceInLamports = await connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
    console.log(
        `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
    );
}

getBalance(publicKey);