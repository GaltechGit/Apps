const textarea = document.querySelector("textarea"),
  voiceList = document.querySelector("select"),
  speechBtn = document.querySelector(".btn");
function voices() {
  for (let voice of speechSynthesis.getVoices()) {
    let selected = voice.name === "Google French" ? "selected" : "";
    let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
    voiceList.insertAdjacentHTML("beforeend", option);
  }
}
speechSynthesis.addEventListener("voicechanged", voices);
function textToSpeech(text) {
  let utternance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utternance);
  for (let voice of SpeechSynthesis.getVoices()) {
    if (voice.name === voiceList.value) {
      utternance.voice = voice;
    }
  }
}
speechBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textarea.value !== "") {
    textToSpeech(textarea.value);
  };
});
