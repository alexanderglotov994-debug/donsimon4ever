const loreSets = [
  ["Салют Ондатра", "фура дизлайков", "мармыш на кассе", "Обнял"],
  ["Муся попросила окрошку", "2 дельфина", "народное название", "Было и было"],
  ["Телега Дона", "абстрактный Симон", "индекс ондатры 87", "Проснулись"],
  ["Мастерская", "тредовая злоба", "картина на миллионы", "Улыбнулись"],
  ["Ондатра в короне", "дельфины по кд", "фан-арт из фуры", "На ЖОЗе"],
];

const button = document.querySelector("#loreButton");
const result = document.querySelector("#loreResult");
const counter = document.querySelector("#counter");

button?.addEventListener("click", () => {
  const pick = loreSets[Math.floor(Math.random() * loreSets.length)];
  result.innerHTML = pick
    .map((item, index) => `<span>${item}</span>${index < pick.length - 1 ? "<b>+</b>" : ""}`)
    .join("");
});

function tick() {
  if (!counter) return;
  const now = new Date();
  const seconds = (5 * 3600 + 42 * 60 + 17 - Math.floor(now.getTime() / 1000)) % (6 * 3600);
  const normalized = seconds < 0 ? seconds + 6 * 3600 : seconds;
  const h = String(Math.floor(normalized / 3600)).padStart(2, "0");
  const m = String(Math.floor((normalized % 3600) / 60)).padStart(2, "0");
  const s = String(normalized % 60).padStart(2, "0");
  counter.textContent = `${h}:${m}:${s}`;
}

tick();
setInterval(tick, 1000);
