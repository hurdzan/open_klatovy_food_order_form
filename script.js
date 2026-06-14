// ── Konfigurace ────────────────────────────────────────────────────────────

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwb146AAngS32czu7Ty7tYLrwBoxYqLHBIFBeweR-x5QNd79-Q_acnhdQGXvJRIJo0/exec";

const CENA_DOSPELA = 165;
const CENA_DETSKA  = 130;
const CENA_POLEVKA = 20;

const POLEVKA_TEXT = "Slepičí vývar s drobením a zeleninou, 0,3 l";

// ── Data jídel ─────────────────────────────────────────────────────────────

const DNY = [
  {
    id: "sob27", nazev: "Sobota", datum: "27.6.",
    vecere: [
      "Kuřecí nudličky Čína, dušená rýže, 120g/300g",
      "Rybí Fish & Chips, brambory, tatarka, 120g/300g",
      "Kuřecí stripsy na zeleninovém salátu s dresinkem, opečené bramborové klíny",
    ],
    obed: null,
  },
  {
    id: "ned28", nazev: "Neděle", datum: "28.6.",
    vecere: [
      "Svíčková na smetaně, houskový knedlík, brusinky, šlehačka",
      "Uzené maso, bramborový knedlík, zelí",
      "Zeleninová čína s tofu, dušená rýže",
    ],
    obed: [
      "Kuřecí řízek, bramborový salát",
      "Smažený sýr, bramborový salát, tatarka",
      "Zeleninový výběr, vařené brambory s máslem",
    ],
  },
  {
    id: "pon29", nazev: "Pondělí", datum: "29.6.",
    vecere: [
      "Segedínský guláš, houskový knedlík",
      "Pečená kuřecí stehna, vařené brambory, salát",
      "Čočka na kyselo, vejce, okurka",
    ],
    obed: [
      "Svíčková na smetaně, houskový knedlík",
      "Kuřecí steak s bylinkovým máslem, hranolky",
      "Pasta primavera se zeleninou a parmazánem",
    ],
  },
  {
    id: "ute30", nazev: "Úterý", datum: "30.6.",
    vecere: [
      "Pečené vepřové koleno, bramborová kaše, hořčice",
      "Grilovaný losos, vařené brambory, salát",
      "Plněné papriky, rajčatová omáčka, rýže",
    ],
    obed: [
      "Špenátové tagliatelle, parmazán",
      "Kuřecí curry, basmati rýže",
      "Hamburger s hranolkami a salátem",
    ],
  },
  {
    id: "str1", nazev: "Středa", datum: "1.7.",
    vecere: [
      "Svíčkový steak, opečené brambory, grilovaná zelenina",
      "Kuřecí tikka masala, rýže, naan",
      "Zeleninový guláš, chléb",
    ],
    obed: [
      "Smažená kuřecí křídla, coleslaw, hranolky",
      "Vepřová panenka, houskový knedlík, omáčka",
      "Quinoa bowl se zeleninou a hummussem",
    ],
  },
  {
    id: "ctv2", nazev: "Čtvrtek", datum: "2.7.",
    vecere: [
      "Grilovaná kuřecí prsa, pečené brambory, grilovaná zelenina",
      "Vepřový řízek přírodní, bramborová kaše",
      "Ratatouille, čerstvý chléb",
    ],
    obed: [
      "Hovězí vývar s nudlemi a zeleninou",
      "Fazolový hrnec s klobásou, chléb",
      "Cizrnový salát s olivami a fetou",
    ],
  },
  {
    id: "pat3", nazev: "Pátek", datum: "3.7.",
    vecere: [
      "Pečené kuře s česnekem, opečené brambory",
      "Makrely na grilu, bramborový salát",
      "Zeleninová pizza",
    ],
    obed: [
      "Masové koule v rajčatové omáčce, těstoviny",
      "Grilovaný losos, basmati rýže",
      "Sýrové rizoto s hříbky",
    ],
  },
  {
    id: "sob4", nazev: "Sobota", datum: "4.7.",
    vecere: [
      "Vepřová žebra BBQ, coleslaw, hranolky",
      "Zapečená kuřecí prsa s mozzarellou, těstoviny",
      "Plněné papriky s rýží a fetou",
    ],
    obed: [
      "Svíčková na smetaně, houskový knedlík, brusinky",
      "Kuřecí gyros, tzatziki, pita",
      "Zeleninová čína s tofu, rýže",
    ],
  },
  {
    id: "ned5", nazev: "Neděle", datum: "5.7.",
    vecere: null,
    obed: [
      "Vepřová pečeně, svíčková omáčka, houskový knedlík",
      "Kuřecí řízek, bramborový salát",
      "Zeleninový výběr s vařenou rýží",
    ],
  },
];

// ── Sestavení formuláře ─────────────────────────────────────────────────────

function sestavFormular() {
  const kontejner = document.getElementById("dny-container");
  DNY.forEach(den => {
    const karta = document.createElement("div");
    karta.className = "day-card";
    karta.id = `den-${den.id}`;
    karta.innerHTML = `
      <div class="day-header" onclick="toggleDen('${den.id}')">
        <div class="day-dot" id="dot-${den.id}"></div>
        <div style="margin-right:8px">
          <div class="day-name">${den.nazev}</div>
          <div class="day-date">${den.datum}</div>
        </div>
        <div class="day-summary" id="summary-${den.id}"></div>
        <div class="day-chevron">⌄</div>
      </div>
      <div class="day-body" id="body-${den.id}">
        ${den.vecere ? sestavMealSlot(den.id, "vecere", den.vecere) : ""}
        ${den.obed   ? sestavMealSlot(den.id, "obed",   den.obed)  : ""}
      </div>
    `;
    kontejner.appendChild(karta);
  });
}

function sestavMealSlot(denId, typ, jidla) {
  const nazev = typ === "vecere" ? "Večeře" : "Oběd";

  const jidlaHtml = jidla.map((j, i) => `
    <div class="meal-option">
      <input type="radio" name="${denId}_${typ}" id="${denId}_${typ}_${i + 1}"
             value="${i + 1}" onchange="onJidloChange('${denId}','${typ}')">
      <label for="${denId}_${typ}_${i + 1}">
        <span class="meal-num">${i + 1}</span>${j}
      </label>
    </div>
  `).join("");

  const noneHtml = `
    <div class="meal-option meal-option-none">
      <input type="radio" name="${denId}_${typ}" id="${denId}_${typ}_none"
             value="" checked onchange="onJidloChange('${denId}','${typ}')">
      <label for="${denId}_${typ}_none">Nevybráno</label>
    </div>
  `;

  const polevkaHtml = typ === "obed" ? `
    <div class="polevka-row disabled" id="polevka-row-${denId}">
      <input type="checkbox" id="polevka_${denId}" name="polevka_${denId}"
             onchange="aktualizujCenu()">
      <label for="polevka_${denId}">${POLEVKA_TEXT}</label>
      <span class="polevka-price">+${CENA_POLEVKA} Kč</span>
    </div>
  ` : "";

  return `
    <div class="meal-slot ${typ}">
      <div class="meal-label">${nazev}</div>
      <div class="meal-options">${jidlaHtml}${noneHtml}</div>
      ${polevkaHtml}
    </div>
  `;
}

// ── Interakce ───────────────────────────────────────────────────────────────

function toggleDen(id) {
  document.getElementById(`den-${id}`).classList.toggle("open");
}

function onJidloChange(denId, typ) {
  if (typ === "obed") aktualizujPolevku(denId);
  aktualizujShrnutiDne(denId);
  aktualizujCenu();
}

function aktualizujPolevku(denId) {
  const row = document.getElementById(`polevka-row-${denId}`);
  if (!row) return;
  const vybrano = document.querySelector(`input[name="${denId}_obed"]:checked`);
  const maJidlo = vybrano && vybrano.value !== "";
  row.classList.toggle("disabled", !maJidlo);
  if (!maJidlo) document.getElementById(`polevka_${denId}`).checked = false;
}

function aktualizujShrnutiDne(denId) {
  const den     = DNY.find(d => d.id === denId);
  const karta   = document.getElementById(`den-${denId}`);
  const summary = document.getElementById(`summary-${denId}`);
  const casti   = [];

  if (den.vecere) {
    const v = document.querySelector(`input[name="${denId}_vecere"]:checked`);
    if (v && v.value) casti.push(`Večeře: ${v.value}`);
  }
  if (den.obed) {
    const o = document.querySelector(`input[name="${denId}_obed"]:checked`);
    if (o && o.value) {
      const pol = document.getElementById(`polevka_${denId}`);
      casti.push(`Oběd: ${o.value}${pol && pol.checked ? "P" : ""}`);
    }
  }

  summary.textContent = casti.join("  ·  ");
  karta.classList.toggle("has-selection", casti.length > 0);
}

// ── Průběžná cena ───────────────────────────────────────────────────────────

function spoctiCenu() {
  const porceEl = document.querySelector("input[name='porce']:checked");
  if (!porceEl) return 0;
  const cenaPorce = porceEl.value === "detska" ? CENA_DETSKA : CENA_DOSPELA;
  let total = 0;

  DNY.forEach(den => {
    if (den.vecere) {
      const v = document.querySelector(`input[name="${den.id}_vecere"]:checked`);
      if (v && v.value) total += cenaPorce;
    }
    if (den.obed) {
      const o = document.querySelector(`input[name="${den.id}_obed"]:checked`);
      if (o && o.value) {
        total += cenaPorce;
        const pol = document.getElementById(`polevka_${den.id}`);
        if (pol && pol.checked) total += CENA_POLEVKA;
      }
    }
  });

  return total;
}

function aktualizujCenu() {
  const total = spoctiCenu();
  const bar   = document.getElementById("cena-bar");
  const val   = document.getElementById("cena-bar-value");
  val.textContent = `${total} Kč`;
  bar.style.display = total > 0 ? "flex" : "none";
}

// ── Porce + rok ─────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rok").addEventListener("input", function () {
    const rok          = parseInt(this.value, 10);
    const jeValidni    = rok >= 1930 && rok <= 2026;
    const detskaMozna  = jeValidni && rok >= 2014;
    const radioDospela = document.getElementById("porce-dospela");
    const radioDetska  = document.getElementById("porce-detska");
    const notice       = document.getElementById("porce-notice");

    radioDetska.disabled = !detskaMozna;
    if (!detskaMozna && radioDetska.checked) radioDospela.checked = true;

    if (!jeValidni || !this.value) {
      notice.textContent = "";
      notice.classList.remove("visible");
    } else if (detskaMozna) {
      notice.textContent = `Rok ${rok} — dětská i dospělá porce jsou dostupné.`;
      notice.classList.add("visible");
    } else {
      notice.textContent = `Rok ${rok} — dostupná pouze dospělá porce (${CENA_DOSPELA} Kč / jídlo).`;
      notice.classList.add("visible");
    }

    aktualizujCenu();
  });
});

// ── Validace ────────────────────────────────────────────────────────────────

function zobrazChybu(inputId, errId, zobrazit) {
  document.getElementById(inputId)?.classList.toggle("error", zobrazit);
  document.getElementById(errId)?.classList.toggle("visible", zobrazit);
  return zobrazit;
}

function validuj() {
  let chyba = false;
  const jmeno    = document.getElementById("jmeno").value.trim();
  const prijmeni = document.getElementById("prijmeni").value.trim();
  const email    = document.getElementById("email").value.trim();
  const rok      = parseInt(document.getElementById("rok").value, 10);
  const porce    = document.querySelector("input[name='porce']:checked");

  if (zobrazChybu("jmeno",    "err-jmeno",    !jmeno))    chyba = true;
  if (zobrazChybu("prijmeni", "err-prijmeni", !prijmeni)) chyba = true;
  if (zobrazChybu("email",    "err-email",    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) chyba = true;
  if (zobrazChybu("rok",      "err-rok",      !(rok >= 1930 && rok <= 2026)))             chyba = true;

  const errPorce = document.getElementById("err-porce");
  errPorce.classList.toggle("visible", !porce);
  if (!porce) chyba = true;

  return !chyba;
}

// ── Odeslání ────────────────────────────────────────────────────────────────

async function odeslat() {
  if (!validuj()) {
    document.querySelector(".error-msg.visible")
      ?.closest(".card, .submit-area")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const porceEl = document.querySelector("input[name='porce']:checked");
  const data = {
    jmeno:    document.getElementById("jmeno").value.trim(),
    prijmeni: document.getElementById("prijmeni").value.trim(),
    email:    document.getElementById("email").value.trim(),
    rok:      document.getElementById("rok").value,
    porce:    porceEl.value,
    cena:     spoctiCenu(),
  };

  DNY.forEach(den => {
    if (den.vecere) {
      const v = document.querySelector(`input[name="${den.id}_vecere"]:checked`);
      data[`vecere_${den.datum}`] = v?.value || "";
    }
    if (den.obed) {
      const o = document.querySelector(`input[name="${den.id}_obed"]:checked`);
      const p = document.getElementById(`polevka_${den.id}`);
      data[`obed_${den.datum}`] = o?.value ? (o.value + (p?.checked ? "P" : "")) : "";
    }
  });

  const btn = document.getElementById("submit-btn");
  btn.disabled = true;
  btn.textContent = "Odesílám…";

  try {
    const params = new URLSearchParams(data);
    await fetch(APPS_SCRIPT_URL + "?" + params.toString(), {
      method: "GET",
      mode: "no-cors",
    });
    document.getElementById("msg-success").classList.add("visible");
    document.getElementById("msg-error").classList.remove("visible");
    document.getElementById("cena-bar").style.display = "none";
    btn.style.display = "none";
  } catch (e) {
    document.getElementById("msg-error").classList.add("visible");
    btn.disabled = false;
    btn.textContent = "Odeslat objednávku";
  }
}

// ── Init ────────────────────────────────────────────────────────────────────

sestavFormular();