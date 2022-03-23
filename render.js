const encrypt = (str, key) => {
  return str && key ? rc4(str, key) : null
}

const decrypt = (str, key) => {
  return str && key ? rc4(str, key) : null
}

const rc4 = (str, key) => {
  let s = [],
    j = 0,
    temp,
    result = ""

  //! Key-scheduling algorithm (KSA)
  for (let i = 0; i < 256; i++) {
    s[i] = i
  }
  for (let i = 0; i < 256; i++) {
    j = (j + s[i] + key.charCodeAt(i % key.length)) % 256
    temp = s[i]
    s[i] = s[j]
    s[j] = temp
  }

  let i = 0
  j = 0

  //! Pseudo-random generation algorithm (PRGA)
  for (let y = 0; y < str.length; y++) {
    i = (i + 1) % 256
    j = (j + s[i]) % 256
    temp = s[i]
    s[i] = s[j]
    s[j] = temp
    result += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256])
  }
  return result
}

//! Render
const text_input = document.getElementById("text_input")
const key_input = document.getElementById("key_input")
const encrypt_button = document.getElementById("encrypt_button")
const encrypted_text = document.getElementById("encrypted_text")
const decrypted_text = document.getElementById("decrypted_text")

function render() {
  let text = text_input.value
  let key = key_input.value
  let encryptText = encrypt(text, key)
  encrypted_text.innerText = encryptText
  decrypted_text.innerText = decrypt(encryptText, key)
}

encrypt_button.addEventListener("click", render)
