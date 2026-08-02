const bouton = document.getElementById("decrypt-btn");

bouton.addEventListener("click", () => {
  window.location.href = "coeur/index.html";
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function typeWriter(element, text, speed = 35) {
  return new Promise((resolve) => {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        resolve();
      }
    }
    type();
  });
}

async function startTerminalAnimation() {
  const systemElem = document.getElementById("system");
  const statutElem = document.getElementById("statut");
  const packageElem = document.getElementById("package");
  const buttonElem = document.getElementById("button");
  const footerElem = document.getElementById("footer");

  // 1. Première ligne [system]
  const spanPink = document.createElement("span");
  spanPink.className = "pink";
  systemElem.appendChild(spanPink);

  await typeWriter(
    spanPink,
    "[system] Initializing heart.PROTOCOL_v1.0 ...",
    35,
  );

  await sleep(200);

  statutElem.classList.add("show");
  await typeWriter(statutElem, "[statut] ", 35);

  const spanGreen = document.createElement("span");
  spanGreen.className = "green";
  statutElem.appendChild(spanGreen);
  await typeWriter(spanGreen, "Ready", 50);

  await sleep(400);
  packageElem.classList.add("show");

  await sleep(400);
  buttonElem.classList.add("show");

  await sleep(300);
  footerElem.classList.add("show");
}

window.addEventListener("DOMContentLoaded", startTerminalAnimation);
