function calculation() {
  const poid = document.getElementById("h1");
  const taille = document.getElementById("h2");
  if (h1.value === '' && h2.value === '') {
    results.innerHTML = "Vous devez insérer votre taille et votre poids.";
    results.style.color = "red";
  } else if (h1.value === '' && h2.value !== '') {
    results.innerHTML = "Vous devez insérer votre poids.";
    results.style.color = "red";
  } else if (h2.value === '' && h1.value !== '') {
    results.innerHTML = "Vous devez insérer votre taille.";
    results.style.color = "red";
  } else {
    const taille2 = Number(taille.value) / 100;
    const imc = Number(poid.value) / (taille2 * taille2);
    if (imc < 18.6) {
      results.innerHTML = "Votre IMC est de " + String(imc) + ", vous êtes en sous-poid.";
      results.style.color = "blue";
    } else if (imc >= 18.6 && imc <= 25) {
      results.innerHTML = "Votre IMC est de " + String(imc) + ", vous êtes normal.";
      results.style.color = "green";
    } else if (imc > 25 && imc <= 30) {
      results.innerHTML = "Votre IMC est de " + String(imc) + ", vous êtes en sur-poid.";
      results.style.color = "orange";
    } else if (imc > 30 && imc <= 40) {
      results.innerHTML = "Votre IMC est de " + String(imc) + ", vous êtes en obésité modérée.";
      results.style.color = "red";
    } else if (imc > 40) {
      results.innerHTML = "Votre IMC est de " + String(imc) + ", vous êtes en obésité sévère.";
      results.style.color = "red";
    };
  };
};
