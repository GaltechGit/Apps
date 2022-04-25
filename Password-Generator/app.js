function generate() {
  const chars = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "N", "Q", "R", "O", "T",
    "U", "V", "W", "X", "Y", "Z", ".", ",", ":", ";", "-", "_", "¦", "@", "#", "°", "§", "¬", "|", "¢", "+", "*", "ç",
    "%", "&", "/", "(", ")", "=", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ];
  const txtarea = document.getElementById("textarea");
  var a = Math.floor(Math.random() * 87);
  a = chars[a];
  var b = Math.floor(Math.random() * 87);
  b = chars[b];
  var c = Math.floor(Math.random() * 87);
  c = chars[c];
  var d = Math.floor(Math.random() * 87);
  d = chars[d];
  var e = Math.floor(Math.random() * 87);
  e = chars[e];
  var f = Math.floor(Math.random() * 87);
  f = chars[f];
  const pass1 = String(a + b + c + d + e + f);
  var a = Math.floor(Math.random() * 87);
  a = chars[a];
  var b = Math.floor(Math.random() * 87);
  b = chars[b];
  var c = Math.floor(Math.random() * 87);
  c = chars[c];
  var d = Math.floor(Math.random() * 87);
  d = chars[d];
  var e = Math.floor(Math.random() * 87);
  e = chars[e];
  var f = Math.floor(Math.random() * 87);
  f = chars[f];
  const pass2 = String(a + b + c + d + e + f);
  txtarea.value = String(pass1 + pass2);
};
