export default wei => {
    const ethVal = wei / Math.pow(10, 18);
    return (`${ethVal.toFixed(18)}`
        .replace(/0+$/, "")
        .replace(/\.$/, "")
    ) + " ETH";
};
