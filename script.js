const advice = document.getElementById("advice");
const text = document.getElementById("text");

async function advicer() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  advice.innerHTML = `advice #${data.slip.id}`;
  text.innerHTML = `"${data.slip.advice}"`;
}
