const extendHex = (shortHex) => {
  // write your code here
    const fullHex = `${shortHex[0]}${shortHex[0]}${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}`;
	return `#${fullHex}`;
};

const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));  
