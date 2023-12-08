const extendHex = (shortHex) => {
  // Remove '#' symbol if present
  shortHex = shortHex.replace('#', '');

  // Extend each color component to get the full hex code
  const fullHex = `${shortHex[0]}${shortHex[0]}${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}`;

  // Add the '#' symbol back and return the full hex code
  return `#${fullHex}`;
};

const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
