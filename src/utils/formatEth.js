export default wei => {
    const ethVal = `${(wei / Math.pow(10, 18))}`;
    let [ num, frac ] = ethVal.split(".");
    if(frac)
        return `${num}.${frac.slice(0, 8)}`;
    return num;
};
