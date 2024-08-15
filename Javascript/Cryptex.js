// Function to scramble a message given a scramble key
function encryptMessage(message, scrambleKey) {
    let keyMap = {};
    for (let i = 0; i < scrambleKey.length; i++) {
      let keyChar = scrambleKey[i];
      if (keyMap[keyChar] === undefined) {
        keyMap[keyChar] = [i];
      } else {
        keyMap[keyChar].push(i);
      }
    }
  
    let encryptedMessage = "";
    for (let char of message) {
      if (keyMap[char]) {
        let replacements = keyMap[char];
        encryptedMessage += scrambleKey[replacements[Math.floor(Math.random() * replacements.length)]];
      } else {
        encryptedMessage += char;
      }
    }
  
    return encryptedMessage;
  }
  
  function decryptMessage(encryptedMessage, scrambleKey) {
    // Create an object to map the key characters to their successors
    let keyMap = {};
    for (let i = 0; i < scrambleKey.length; i++) {
      keyMap[scrambleKey[i]] = scrambleKey[(i + 1) % scrambleKey.length];
    }
    
    // Decrypt the message
    let decryptedMessage = "";
    for (let char of encryptedMessage) {
      if (keyMap[char]) {
        decryptedMessage += keyMap[char];
      } else {
        decryptedMessage += char;
      }
    }
    
    return decryptedMessage;
  }

// Key and message to use for testing
let scrambleKey = "akdsjfhhqkwnebmzcxvlopqwoer";
let originalMessage = "Hello World!";
let encryptedMessage = encryptMessage(originalMessage, scrambleKey);
let decryptedMessage = decryptMessage(encryptedMessage, scrambleKey);

console.log(`Encrypted message: ${encryptedMessage}`);
console.log(`Decrypted message: ${decryptedMessage}`);