const { encrypt, decrypt } = require("./rc4")

const text = "TestTestTestTestTest"
const key = "rc4@12345678"

const rc4_test = (text) => {
  let encryptText = encrypt(text, key)

  console.log("Encrypt: ", encryptText)
  console.log("Decrypt: ", decrypt(encryptText, key))
}

rc4_test(text)
