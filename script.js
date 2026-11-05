// Typing animation for the hero terminal — simulates an API request/response cycle
const terminalBody = document.getElementById("terminal-body");

const script = [
  { text: "$ curl -X POST /api/orders \\", cls: "prompt" },
  { text: "  -d '{ \"restaurant\": \"Mama Kudi's Kitchen\" }'", cls: "" },
  { text: "", cls: "" },
  { text: "→ 201 Created", cls: "ok" },
  { text: "{ status: \"pending\", riderAssigned: false }", cls: "" },
  { text: "", cls: "" },
  { text: "$ npm run dev", cls: "prompt" },
  { text: "✓ server ready on :4000", cls: "ok" },
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderStatic() {
  terminalBody.innerHTML = script
    .map(line => `<div class="${line.cls}">${line.text || "&nbsp;"}</div>`)
    .join("");
}

async function typeScript() {
  if (reduceMotion) { renderStatic(); return; }

  for (const line of script) {
    const div = document.createElement("div");
    if (line.cls) div.className = line.cls;
    terminalBody.appendChild(div);

    for (let i = 0; i < line.text.length; i++) {
      div.textContent = line.text.slice(0, i + 1);
      await sleep(14);
    }
    await sleep(220);
  }

  // blinking cursor at the end
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  terminalBody.appendChild(cursor);

  // loop: wait, then restart
  await sleep(4000);
  terminalBody.innerHTML = "";
  typeScript();
}

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

typeScript();

// Smooth-scroll active link highlight (nice-to-have, harmless if absent)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    }
  });
});
