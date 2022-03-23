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

module.exports = { encrypt, decrypt }
