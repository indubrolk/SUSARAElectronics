const fs = require('fs');

function checkSize() {
  const buffer = fs.readFileSync('src/assets/cursor.png');
  // Very basic PNG width/height check
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  console.log(`Dimensions: ${width}x${height}`);
}

checkSize();
