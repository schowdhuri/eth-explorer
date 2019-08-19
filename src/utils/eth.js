import Eth from "web3-eth";

if(!Eth.givenProvider)
    alert("No Eth Provider found. Is Metamask not configured?");

export default new Eth(Eth.givenProvider);
