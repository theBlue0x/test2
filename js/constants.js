/// URL of Blue0x Node ///
apiURL = 'https://blue0x.duckdns.org' + '/nxt?'

currentURL = window.location.origin
blxTimestamp = '1705506960'

//Get Date From Timestamp
function getDate(timestamp) {
  const x = (+blxTimestamp + +timestamp) * 1000
  const d = new Date(x)
  const y = d.toLocaleString()
  return y
}

function sign(txBytes, secretPhrase) {
  var secretPhraseHex = converters.stringToHexString(secretPhrase)
  var messageBytes = converters.hexStringToByteArray(txBytes)
  var secretPhraseBytes = converters.hexStringToByteArray(secretPhraseHex)
  var digest = simpleHash(secretPhraseBytes)
  var s = curve25519.keygen(digest).s
  var m = simpleHash(messageBytes)
  var x = simpleHash(m, s)
  var y = curve25519.keygen(x).p
  var h = simpleHash(m, y)
  var v = curve25519.sign(h, x, s)
  var signature = converters.byteArrayToHexString(v.concat(h))
  var payload = txBytes.substr(0, 192) + signature + txBytes.substr(320)
  const message = {
    payload: payload,
    signature: signature
  }
  return message
}

function simpleHash(b1, b2) {
  var sha256 = CryptoJS.algo.SHA256.create();
  sha256.update(converters.byteArrayToWordArray(b1))
  if (b2) {
    sha256.update(converters.byteArrayToWordArray(b2))
  }
  var hash = sha256.finalize()
  return converters.wordArrayToByteArrayImpl(hash, false)
}

function getPublicKey(secretPhrase) {
  var secretPhraseBytes = converters.hexStringToByteArray(converters.stringToHexString(secretPhrase))
  var digest = simpleHash(secretPhraseBytes)
  return converters.byteArrayToHexString(curve25519.keygen(digest).p)
}


