// ── Konfigurace ────────────────────────────────────────────────────────────

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxhIGGH4ZQYHJkoSC-9pmlk8WFrXOrJPlpGkOVL1PN3BG-ESn_2CNfzNSSQL2Mdi4O8/exec";

const CENA_DOSPELA        = 170;
const CENA_DETSKA         = 135;
const CENA_POLEVKA_DOSPL  = 25;
const CENA_POLEVKA_DETSKA = 20;

// ── Data jídel ─────────────────────────────────────────────────────────────

const DNY = [
  {
    id: "so_1", nazev: "Sobota", datum: "27.6.",
    obed: null,
    vecere: [
      "Moravský vrabec, zelí, bramborový knedlík",
      "Smažená kuřecí jehla, vařené brambory, tatarka",
      "Salát Fitness s kuřecími nudličkami, nivou, červenou řepou, tousty",
      "VEGE Vegetariánský zeleninový salát s sweet kukuřicí a cherry rajčátky, ciabatta",
    ],
    polevka: null,
  },
  {
    id: "ne_1", nazev: "Neděle", datum: "28.6.",
    obed: [
      "Azzu po tatarsku, bramborový knedlík",
      "Vepřové ražniči, opečené brambory",
      "Kuřecí plněná roláda šunka a sýr, dušená rýže /BEZLEPEK/",
    ],
    vecere: [
      "Vepřový steak na zeleninovém rizotu",
      "Grilované kuřecí medailónky se zeleninou, šťouchané brambory",
      "Mix salátů s pečeným lososem, tousty",
      "VEGE Tortilla plněná zeleninou a sýrem, mix listových salátů",
    ],
    polevka: "Slepičí vývar s drobením",
  },
  {
    id: "po", nazev: "Pondělí", datum: "29.6.",
    obed: [
      "Vepřové výpečky, kysané zelí, houskový knedlík",
      "Vepřový řízek v sýrovém těstíčku, vařené brambory, tatarka",
      "Kuřecí nudličky WOK, jasmínová rýže /BEZLEPEK/",
    ],
    vecere: [
      "Vepřová panenka na jehle, hranolky",
      "Kuřecí steak Neapol, gnocchi",
      "Kuřecí Gyros na ledovém salátu, bageta",
      "VEGE Salátová variace s vejcem, cizrnou a červenou čočkou, bageta",
    ],
    polevka: "Hovězí vývar s kapáním",
  },
  {
    id: "ut", nazev: "Úterý", datum: "30.6.",
    obed: [
      "Znojemské hovězí nudličky, houskový knedlík",
      "Grilovaný vepřový steak, restované žampióny s cibulkou, bramborová kaše /BEZLEPEK/",
      "Vepřová krkovice pečená, dušená mrkev, vařené brambory",
    ],
    vecere: [
      "Kuřecí medailónky, baby karotka s hráškem, dušená rýže",
      "Smažený květák, brambory, tatarka",
      "Salátová variace s kousky smaženého hermelínu a brusinkami, bageta",
      "Salátová variace s kuřecími kousky Teriyaki, dresinkem a bagetou",
    ],
    polevka: "Slepičí vývar s nudlemi a zeleninou",
  },
  {
    id: "st", nazev: "Středa", datum: "1.7.",
    obed: [
      "Vepřový steak na žampiónech, knedlík",
      "Bramborové knedlíky s uzeným masem, zelí",
      "Kuřecí plátek se šunkou a sýrem, brambory /BEZLEPEK/",
    ],
    vecere: [
      "Svíčková na smetaně, houskový knedlík",
      "Kuřecí stripsy, bramborová kaše, zelenina",
      "VEGE Zeleninový salát s marinovaným balkánským sýrem a olivami, bageta",
      "Salátová variace s vepřovou panenkou v bylinkovém těstíčku, tmavé tousty",
    ],
    polevka: "Luštěninová",
  },
  {
    id: "ct", nazev: "Čtvrtek", datum: "2.7.",
    obed: [
      "Smažený karbanátek, vařené brambory",
      "Kuřecí steak s mexickými fazolemi",
      "VEGE Zapečené brambory se zeleninou a mozzarellou, salát",
    ],
    vecere: [
      "Směs mas se zeleninou, bramboráčky",
      "Grilovaný vepřový steak, zelenina, brambory",
      "Těstovinový salát s kuřecím masem a kostičkami anglické slaniny, bageta",
      "VEGE Taco Salad s listy salátu, červených fazolí, kukuřice, avokáda a dalších, bageta",
    ],
    polevka: "Kuřecí vývar s rýží a hráškem",
  },
  {
    id: "pa", nazev: "Pátek", datum: "3.7.",
    obed: [
      "Pečené masové koule, houbová smetanová omáčka, špecle",
      "Smažený kuřecí řízek, bramborová kaše, okurka",
      "Vepřové nudličky z pečeně ala Španělský ptáček, houskový knedlík",
    ],
    vecere: [
      "Kuřecí směs Gurmán, jasmínová rýže",
      "Vepřové marinované ražniči na jehle, opečené brambory /BEZLEPEK/",
      "Salát Caesar z ledového salátu s plátky kuřecího prsíčka a krutóny, bageta",
      "Zeleninový salát Oslo s nugetami z lososa /nemleté/, dresinkem, kaiserka",
    ],
    polevka: "Kulajda",
  },
  {
    id: "so_2", nazev: "Sobota", datum: "4.7.",
    obed: [
      "Sedlácká bašta, kysané zelí, mix knedlíků",
      "Kuřecí nudličky se zeleninou, jasmínová rýže",
      "Smažené rybí filé, opečené brambory, tatarka",
    ],
    vecere: [
      "Vepřové žebírko na slanině, rýže",
      "Smažené vepřové řízečky, brambory",
      "Salát SHANGHAI s kuřecím masem, bageta",
      "VEGE Italský těstovinový salát s Feta sýrem, dresinkem a bagetou",
    ],
    polevka: "Slepičí s fritátovými nudlemi",
  },
  {
    id: "ne_2", nazev: "Neděle", datum: "5.7.",
    obed: [
      "Vídeňský hovězí guláš, houskový knedlík",
      "Grilovaný kuřecí steak se slaninou, hranolky",
      "Mexická tortilla s kuřecími nudličkami a zeleninou, mix listových salátů",
    ],
    vecere: null,
    polevka: "Hovězí vývar s játrovými knedlíčky",
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
        ${den.obed   ? sestavMealSlot(den.id, "obed",   den.obed)  : ""}
        ${den.vecere ? sestavMealSlot(den.id, "vecere", den.vecere) : ""}
      </div>
    `;
    kontejner.appendChild(karta);
  });
}

function sestavMealSlot(denId, typ, jidla) {
  const nazev = typ === "vecere" ? "Večeře · 18:30–21:00" : "Oběd · 12:00–14:00";

  const jidlaHtml = jidla.map((j, i) => `
    <div class="meal-option">
      <input type="radio" name="${denId}_${typ}" id="${denId}_${typ}_${i + 1}"
             value="${i + 1}"
             onchange="onJidloChange('${denId}','${typ}')">
      <label for="${denId}_${typ}_${i + 1}"
             onclick="toggleJidloLabel(event, '${denId}','${typ}',${i + 1})">
        <span class="meal-num">${i + 1}</span>${j}
      </label>
    </div>
  `).join("");

  // Skrytý "none" radio — drží stav "nic nevybráno", není vidět v UI
  const noneHtml = `
    <div style="display:none">
      <input type="radio" name="${denId}_${typ}" id="${denId}_${typ}_none"
             value="" checked onchange="onJidloChange('${denId}','${typ}')">
    </div>
  `;

  const den = DNY.find(d => d.id === denId);
  const polevkaNazev = den?.polevka || null;
  const polevkaHtml = (typ === "obed" && polevkaNazev) ? `
    <div class="polevka-row disabled" id="polevka-row-${denId}">
      <input type="checkbox" id="polevka_${denId}" name="polevka_${denId}"
             onchange="aktualizujCenu()">
      <label for="polevka_${denId}">${polevkaNazev}</label>
      <span class="polevka-price" id="polevka-price-${denId}">+20 Kč</span>
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



function toggleJidloLabel(e, denId, typ, idx) {
  // V okamžiku click eventu na label už prohlížeč radio přepnul na checked.
  // Pokud jsme ale předtím uložili, že toto radio už bylo checked (před klikem),
  // znamená to opakované kliknutí → odhlásíme.
  const radio = document.getElementById(`${denId}_${typ}_${idx}`);
  if (radio.dataset.wasChecked === "true") {
    e.preventDefault();
    radio.checked = false;
    radio.dataset.wasChecked = "false";
    const noneRadio = document.getElementById(`${denId}_${typ}_none`);
    noneRadio.checked = true;
    onJidloChange(denId, typ);
  } else {
    radio.dataset.wasChecked = "true";
    // Odstraníme příznak u ostatních rádií ve skupině
    document.querySelectorAll(`input[name="${denId}_${typ}"]`).forEach(r => {
      if (r !== radio) r.dataset.wasChecked = "false";
    });
    onJidloChange(denId, typ);
  }
}

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
  const jeDetska    = porceEl.value === "detska";
  const cenaPorce   = jeDetska ? CENA_DETSKA : CENA_DOSPELA;
  const cenaPolevky = jeDetska ? CENA_POLEVKA_DETSKA : CENA_POLEVKA_DOSPL;
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
        if (pol && pol.checked) total += cenaPolevky;
      }
    }
  });

  return total;
}

function aktualizujCenyPolevek() {
  const porceEl = document.querySelector("input[name='porce']:checked");
  if (!porceEl) return;
  const cena = porceEl.value === "detska" ? CENA_POLEVKA_DETSKA : CENA_POLEVKA_DOSPL;
  DNY.forEach(den => {
    const el = document.getElementById(`polevka-price-${den.id}`);
    if (el) el.textContent = `+${cena} Kč`;
  });
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
  const rokInput = document.getElementById("rok");
  rokInput.addEventListener("focus", function () {
    if (!this.value) this.value = this.placeholder;
  });
  rokInput.addEventListener("input", function () {
    const rok          = parseInt(this.value, 10);
    const jeValidni    = rok >= 1920 && rok <= 2026;
    const detskaMozna  = jeValidni && rok >= 2013;
    const radioDospela = document.getElementById("porce-dospela");
    const radioDetska  = document.getElementById("porce-detska");
    const notice       = document.getElementById("porce-notice");

    radioDetska.disabled = !detskaMozna;
    if (!detskaMozna && radioDetska.checked) radioDospela.checked = true;
    aktualizujCenyPolevek();

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