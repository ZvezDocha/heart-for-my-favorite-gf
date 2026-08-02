const container = document.getElementById("heart-container");

// Réglages du cœur
const contourCount = 180; // Nombre de mots sur les contours (définition nette de la forme)
const innerCount = 120; // Nombre de mots à l'intérieur (plus espacés)

function getHeartPosition(t) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t)
  );
  return { x, y };
}

const elements = [];

// 1. Placer les mots SUR LE CONTOUR (pour bien tracer le cœur)
for (let i = 0; i < contourCount; i++) {
  const textNode = document.createElement("div");
  textNode.className = "love-text";
  textNode.textContent = "i love you";

  // Répartition uniforme sur le bord
  const t = (i / contourCount) * Math.PI * 2;
  const pos = getHeartPosition(t);

  // Échelle plus grande (18) pour aérer le dessin
  const scale = 18;

  const posX = 350 + pos.x * scale;
  const posY = 320 + pos.y * scale;

  textNode.style.left = `${posX}px`;
  textNode.style.top = `${posY}px`;
  textNode.style.fontSize = "12px"; // Taille uniforme et fine sur les bords

  container.appendChild(textNode);
  elements.push(textNode);
}

// 2. Placer les mots À L'INTÉRIEUR (espacés)
for (let i = 0; i < innerCount; i++) {
  const textNode = document.createElement("div");
  textNode.className = "love-text";
  textNode.textContent = "i love you";

  const t = Math.random() * Math.PI * 2;
  const pos = getHeartPosition(t);

  // Distribution à l'intérieur avec un facteur plus réduit
  const scale = Math.sqrt(Math.random()) * 16;

  const posX = 350 + pos.x * scale;
  const posY = 320 + pos.y * scale;

  textNode.style.left = `${posX}px`;
  textNode.style.top = `${posY}px`;

  // Taille légèrement plus variée à l'intérieur
  const fontSize = Math.floor(Math.random() * 4) + 10;
  textNode.style.fontSize = `${fontSize}px`;

  container.appendChild(textNode);
  elements.push(textNode);
}

// Mélange pour l'apparition progressive
elements.sort(() => Math.random() - 0.5);

// Animation d'apparition
elements.forEach((el, index) => {
  setTimeout(() => {
    el.classList.add("visible");
  }, index * 12);
});
