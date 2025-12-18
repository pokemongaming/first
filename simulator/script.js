// ===================== Pokémon Data =====================
const pokemonList = [
    { name: "Mega Abomasnow", cp: 2500, hp: 160, attack: 140, types: ["Grass", "Ice"], img: "images/abomasnow.webp" },
    { name: "Mega Absol", cp: 2800, hp: 150, attack: 160, types: ["Dark"], img: "images/absol.webp" },
    { name: "Mega Aerodactyl", cp: 2700, hp: 170, attack: 150, types: ["Rock","Flying"], img: "images/aerodactyl.webp" },
    { name: "Mega Aggron", cp: 2650, hp: 165, attack: 145, types: ["Steel", "Rock"], img: "images/aggron.webp" },
    { name: "Mega Alakazam", cp: 1200, hp: 100, attack: 90, types: ["Psychic"], img: "images/alakazam.webp" },
    { name: "Mega Altaria", cp: 2600, hp: 140, attack: 170, types: ["Dragon", "Flying"], img: "images/altaria.webp" },
    { name: "Mega Ampharos", cp: 2550, hp: 130, attack: 175, types: ["Electric"], img: "images/ampharos.webp" },
    { name: "Articuno", cp: 2700, hp: 180, attack: 155, types: ["Ice","Flying"], img: "images/articuno.webp" },
    { name: "Mega Audino", cp: 2900, hp: 170, attack: 165, types: ["Normal"], img: "images/audino.webp" },
    { name: "Azelf", cp: 3000, hp: 180, attack: 170, types: ["Psychic"], img: "images/azelf.webp" },
    { name: "Mega Banette", cp: 3100, hp: 250, attack: 140, types: ["Ghost"], img: "images/banette.webp" },
    { name: "Mega Beedrill", cp: 3200, hp: 200, attack: 160, types: ["Bug", "Poison"], img: "images/beedrill.webp" },
    { name: "Blacephalon", cp: 3500, hp: 180, attack: 200, types: ["Fire","Ghost"], img: "images/blacephalon.webp" },
    { name: "Mega Blastoise", cp: 3000, hp: 170, attack: 160, types: ["Water"], img: "images/blastoise.webp" },
    { name: "Mega Blaziken", cp: 3000, hp: 170, attack: 160, types: ["Fire", "Fighting"], img: "images/blaziken.webp" },
    { name: "Giratina", cp: 3000, hp: 170, attack: 160, types: ["Ghost", "Dragon"], img: "images/giratina.webp" },
    { name: "Zamazenta", cp: 2800, hp: 160, attack: 165, types: ["Fighting"], img: "images/zamazenta.webp" },
    { name: "Zacian", cp: 3200, hp: 190, attack: 170, types: ["Fairy"], img: "images/zacian.webp" },
    { name: "Origin Giratina", cp: 3150, hp: 185, attack: 168, types: ["Dragon", "Ghost"], img: "images/origin_giratina.webp" },
    { name: "Incarnate Landorus", cp: 3100, hp: 180, attack: 165, types: ["Ground", "Flying"], img: "images/incarnate_landorus.webp" },
    { name: "Incarnate Thundurus", cp: 3500, hp: 190, attack: 180, types: ["Electric", "Flying"], img: "images/incarnate_thundurus.webp" },
    { name: "Therian Thundurus", cp: 3450, hp: 200, attack: 175, types: ["Electric","Flying"], img: "images/therian_thundurus.webp" },
    { name: "Therian Tornadus", cp: 3450, hp: 200, attack: 175, types: ["Flying"], img: "images/therian_tornadus.webp" },
    { name: "Incarnate Tornadus", cp: 3400, hp: 190, attack: 170, types: ["Flying"], img: "images/incarnate_tornadus.webp" },
    { name: "Gigantamax Butterfree", cp: 3400, hp: 190, attack: 170, types: ["Bug", "Flying"], img: "images/butterfree.webp" },
    { name: "Mega Charizard X", cp: 3350, hp: 185, attack: 172, types: ["Fire", "Dragon"], img: "images/charizard-x.webp" },
    { name: "Cobalion", cp: 3350, hp: 185, attack: 172, types: ["Steel", "Fighting"], img: "images/cobalion.webp" },
    { name: "Cresselia", cp: 3300, hp: 185, attack: 170, types: ["Psychic"], img: "images/cresselia.webp" },
    { name: "Dialga", cp: 3300, hp: 190, attack: 168, types: ["Steel", "Dragon"], img: "images/dialga.webp" },
    { name: "Dialga Origin", cp: 3300, hp: 200, attack: 160, types: ["Steel", "Dragon"], img: "images/dialga-origin.webp" },
    { name: "Diancie", cp: 3250, hp: 180, attack: 175, types: ["Rock","Fairy"], img: "images/diancie.webp" },
    { name: "Entei", cp: 3200, hp: 150, attack: 190, types: ["Fire"], img: "images/entei.webp" },
    { name: "Mega Gallade", cp: 3100, hp: 220, attack: 150, types: ["Psychic","Fighting"], img: "images/gallade.webp" },
    { name: "Mega Garchomp", cp: 3250, hp: 210, attack: 160, types: ["Dragon", "Ground"], img: "images/garchomp.webp" },
    { name: "Mega Gardevoir", cp: 3250, hp: 200, attack: 165, types: ["Psychic", "Fairy"], img: "images/gardevoir.webp" },
    { name: "Mega Gengar", cp: 3250, hp: 200, attack: 165, types: ["Poison", "Ghost"], img: "images/gengar.webp" },
    { name: "Gigantamax Blastoise", cp: 3300, hp: 190, attack: 170, types: ["Water"], img: "images/gigantamax-blastoise.webp" },
    { name: "Gigantamax Charizard", cp: 3400, hp: 210, attack: 175, types: ["Fire", "Flying"], img: "images/gigantamax-charizard.webp" },
    { name: "Gigantamax Cinderace", cp: 3300, hp: 200, attack: 168, types: ["Fire"], img: "images/gigantamax-cinderace.webp" },
    { name: "Gigantamax Gengar", cp: 3300, hp: 200, attack: 168, types: ["Ghost", "Poison"], img: "images/gigantamax-gengar.webp" },
    { name: "Gigantamax Inteleon", cp: 3250, hp: 190, attack: 165, types: ["Water"], img: "images/gigantamax-inteleon.webp" },
    { name: "Gigantamax Kingler", cp: 3200, hp: 180, attack: 170, types: ["Water"], img: "images/gigantamax-kingler.webp" },
    { name: "Gigantamax Machamp", cp: 3150, hp: 190, attack: 160, types: ["Fighting"], img: "images/gigantamax-machamp.webp" },
    { name: "Gigantamax Rillaboom", cp: 3150, hp: 180, attack: 165, types: ["Grass"], img: "images/gigantamax-rillaboom.webp" },
    { name: "Gigantamax Toxtricity", cp: 3100, hp: 170, attack: 170, types: ["Electric","Poison"], img: "images/gigantamax-toxtricity.webp" },
    { name: "Gigantamax Venusaur", cp: 3050, hp: 165, attack: 170, types: ["Grass", "Poison"], img: "images/gigantamax-venusaur.webp" },
    { name: "Mega Glalie", cp: 3050, hp: 175, attack: 160, types: ["Ice"], img: "images/glalie.webp" },
    { name: "Mega Latias", cp: 3050, hp: 175, attack: 165, types: ["Dragon", "Psychic"], img: "images/latias.webp" },
    { name: "Mega Gyarados", cp: 3000, hp: 175, attack: 170, types: ["Water", "Flying"], img: "images/gyarados.webp" },
    { name: "Heatran", cp: 2950, hp: 165, attack: 168, types: ["Fire", "Steel"], img: "images/heatran.webp" },
    { name: "Mega Heracross", cp: 3100, hp: 170, attack: 170, types: ["Bug","Fighting"], img: "images/heracross.webp" },
    { name: "Ho-Oh", cp: 3050, hp: 165, attack: 170, types: ["Fire", "Flying"], img: "images/ho-oh.webp" },
    { name: "Mega Houndoom", cp: 3050, hp: 175, attack: 160, types: ["Dark", "Fire"], img: "images/houndoom.webp" },
    { name: "Mega Kangaskhan", cp: 3050, hp: 175, attack: 165, types: ["Normal"], img: "images/kangaskhan.webp" },
    { name: "Kyurem", cp: 3000, hp: 175, attack: 170, types: ["Dragon", "Ice"], img: "images/kyurem.webp" },
    { name: "Gigantamax Lapras", cp: 2950, hp: 165, attack: 168, types: ["Water", "Ice"], img: "images/lapras.webp" },
    { name: "Mega Lopunny", cp: 3100, hp: 170, attack: 170, types: ["Normal"], img: "images/lopunny.webp" },
    { name: "Mega Lucario", cp: 3050, hp: 165, attack: 170, types: ["Fighting", "Steel"], img: "images/lucario.webp" },
    { name: "Lugia", cp: 3050, hp: 175, attack: 160, types: ["Psychic", "Flying"], img: "images/lugia.webp" },
    { name: "Lunala", cp: 3050, hp: 175, attack: 165, types: ["Psychic", "Ghost"], img: "images/lunala.webp" },
    { name: "Mega Manectric", cp: 3000, hp: 175, attack: 170, types: ["Electric"], img: "images/manectric.webp" },
    { name: "Mega Mawile", cp: 2950, hp: 165, attack: 168, types: ["Steel", "Fairy"], img: "images/mawile.webp" },
    { name: "Mega Medicham", cp: 3050, hp: 175, attack: 160, types: ["Fighting", "Psychic"], img: "images/medicham.webp" },
    { name: "Mesprit", cp: 3050, hp: 175, attack: 165, types: ["Psychic"], img: "images/mesprit.webp" },
    { name: "Moltres", cp: 3000, hp: 175, attack: 170, types: ["Fire", "Flying"], img: "images/moltres.webp" },
    { name: "Necrozma", cp: 2950, hp: 165, attack: 168, types: ["Psychic"], img: "images/necrozma.webp" },
    { name: "Palkia Origin", cp: 3100, hp: 170, attack: 170, types: ["Water","Dragon"], img: "images/origin_palkia.webp" },
    { name: "Palkia", cp: 3050, hp: 165, attack: 170, types: ["Water", "Dragon"], img: "images/palkia.webp" },
    { name: "Mega Pidgeot", cp: 3050, hp: 175, attack: 160, types: ["Normal", "Flying"], img: "images/pidgeot.webp" },
    { name: "Mega Pinsir", cp: 3050, hp: 175, attack: 165, types: ["Bug"], img: "images/pinsir.webp" },
    { name: "Primal Groudon", cp: 3000, hp: 175, attack: 170, types: ["Ground"], img: "images/primal_groudon.webp" },
    { name: "Primal Kyogre", cp: 2950, hp: 165, attack: 168, types: ["Water"], img: "images/primal_kyogre.webp" },
    { name: "Raikou", cp: 3050, hp: 175, attack: 160, types: ["Electric"], img: "images/raikou.webp" },
    { name: "Mega Rayquaza", cp: 3050, hp: 175, attack: 165, types: ["Dragon", "Flying"], img: "images/rayquaza.webp" },
    { name: "Regice", cp: 3000, hp: 175, attack: 170, types: ["Ice"], img: "images/regice.webp" },
    { name: "Regidrago", cp: 2950, hp: 165, attack: 168, types: ["Dragon"], img: "images/regidrago.webp" },
    { name: "Regieleki", cp: 3100, hp: 170, attack: 170, types: ["Electric"], img: "images/regieleki.webp" },
    { name: "Regigigas", cp: 3050, hp: 165, attack: 170, types: ["Normal"], img: "images/regigigas.webp" },
    { name: "Regirock", cp: 3050, hp: 175, attack: 160, types: ["Rock"], img: "images/regirock.webp" },
    { name: "Registeel", cp: 3050, hp: 175, attack: 165, types: ["Steel"], img: "images/registeel.webp" },
    { name: "Reshiram", cp: 3000, hp: 175, attack: 170, types: ["Dragon", "Fire"], img: "images/reshiram.webp" },
    { name: "Mega Sableye", cp: 2950, hp: 165, attack: 168, types: ["Dark", "Ghost"], img: "images/sableye.webp" },
    { name: "Mega Salamence", cp: 3050, hp: 175, attack: 160, types: ["Dragon", "Flying"], img: "images/salamence.webp" },
    { name: "Mega Sceptile", cp: 3050, hp: 175, attack: 165, types: ["Grass"], img: "images/sceptile.webp" },
    { name: "Mega Scizor", cp: 3000, hp: 175, attack: 170, types: ["Bug", "Steel"], img: "images/scizor.webp" },
    { name: "Mega Slowbro", cp: 2950, hp: 165, attack: 168, types: ["Psychic", "Water"], img: "images/slowbro.webp" },
    { name: "Solgaleo", cp: 3100, hp: 170, attack: 170, types: ["Psychic","Steel"], img: "images/solgaleo.webp" },
    { name: "Stakataka", cp: 3050, hp: 165, attack: 170, types: ["Rock", "Steel"], img: "images/stakataka.webp" },
    { name: "Mega Steelix", cp: 3050, hp: 175, attack: 160, types: ["Steel", "Ground"], img: "images/steelix.webp" },
    { name: "Suicune", cp: 3050, hp: 175, attack: 165, types: ["Water"], img: "images/suicune.webp" },
    { name: "Mega Swampert", cp: 3000, hp: 175, attack: 170, types: ["Water", "Ground"], img: "images/swampert.webp" },
    { name: "Tapu Bulu", cp: 2950, hp: 165, attack: 168, types: ["Grass", "Fairy"], img: "images/tapu_bulu.webp" },
    { name: "Tapu Fini", cp: 3050, hp: 175, attack: 160, types: ["Water", "Fairy"], img: "images/tapu_fini.webp" }, 
    { name: "Tapu Koko", cp: 3050, hp: 175, attack: 165, types: ["Electric", "Fairy"], img: "images/tapu_koko.webp" },
    { name: "Tapu Lele", cp: 3000, hp: 175, attack: 170, types: ["Psychic", "Fairy"], img: "images/tapu_lele.webp" },
    { name: "Terrakion", cp: 2950, hp: 165, attack: 168, types: ["Rock", "Fighting"], img: "images/terrakion.webp" },
    { name: "Mega Tyranitar", cp: 3100, hp: 170, attack: 170, types: ["Rock","Dark"], img: "images/mega_tyranitar.webp" },
    { name: "Mega Latios", cp: 3050, hp: 165, attack: 170, types: ["Dragon", "Psychic"], img: "images/mega_latios.webp" },
    { name: "Therian Landorus", cp: 3050, hp: 175, attack: 160, types: ["Ground", "Flying"], img: "images/therian_landorus.webp" },
    { name: "Uxie", cp: 3050, hp: 175, attack: 165, types: ["Psychic"], img: "images/uxie.webp" }, 
    { name: "Mega Venusaur", cp: 3000, hp: 175, attack: 170, types: ["Grass", "Poison"], img: "images/venusaur.webp" },
    { name: "Virizion", cp: 2950, hp: 165, attack: 168, types: ["Grass", "Fighting"], img: "images/virizion.webp" },
    { name: "Xerneas", cp: 2950, hp: 165, attack: 168, types: ["Fairy"], img: "images/xerneas.webp" },
    { name: "Yveltal", cp: 2950, hp: 165, attack: 168, types: ["Dark", "Flying"], img: "images/yveltal.webp" },
    { name: "Zapdos", cp: 2950, hp: 165, attack: 168, types: ["Electric", "Flying"], img: "images/zapdos.webp" },
    { name: "Zekrom", cp: 2950, hp: 165, attack: 168, types: ["Dragon", "Electric"], img: "images/zekrom.webp" }
];
// NOTE: We'll add type chart and game logic below...

// ===================== Type Effectiveness (18 types) =====================
const typeChart = {
  Normal:   { Rock:0.5, Ghost:0, Steel:0.5 },
  Fire:     { Fire:0.5, Water:0.5, Grass:2, Ice:2, Bug:2, Rock:0.5, Dragon:0.5, Steel:2 },
  Water:    { Fire:2, Water:0.5, Grass:0.5, Ground:2, Rock:2, Dragon:0.5 },
  Electric: { Water:2, Electric:0.5, Grass:0.5, Ground:0, Flying:2, Dragon:0.5 },
  Grass:    { Fire:0.5, Water:2, Grass:0.5, Poison:0.5, Ground:2, Flying:0.5, Bug:0.5, Rock:2, Dragon:0.5, Steel:0.5 },
  Ice:      { Fire:0.5, Water:0.5, Grass:2, Ice:0.5, Ground:2, Flying:2, Dragon:2, Steel:0.5 },
  Fighting: { Normal:2, Ice:2, Rock:2, Dark:2, Steel:2, Poison:0.5, Flying:0.5, Psychic:0.5, Bug:0.5, Ghost:0, Fairy:0.5 },
  Poison:   { Grass:2, Fairy:2, Poison:0.5, Ground:0.5, Rock:0.5, Ghost:0.5, Steel:0 },
  Ground:   { Fire:2, Electric:2, Poison:2, Rock:2, Steel:2, Grass:0.5, Bug:0.5, Flying:0 },
  Flying:   { Fighting:2, Grass:2, Bug:2, Rock:0.5, Electric:0.5, Steel:0.5 },
  Psychic:  { Fighting:2, Poison:2, Psychic:0.5, Steel:0.5, Dark:0 },
  Bug:      { Grass:2, Psychic:2, Dark:2, Fire:0.5, Fighting:0.5, Poison:0.5, Flying:0.5, Ghost:0.5, Steel:0.5, Fairy:0.5 },
  Rock:     { Fire:2, Ice:2, Flying:2, Bug:2, Fighting:0.5, Ground:0.5, Steel:0.5 },
  Ghost:    { Psychic:2, Ghost:2, Dark:0.5, Normal:0 },
  Dragon:   { Dragon:2, Steel:0.5, Fairy:0 },
  Dark:     { Psychic:2, Ghost:2, Fighting:0.5, Dark:0.5, Fairy:0.5 },
  Steel:    { Rock:2, Ice:2, Fairy:2, Fire:0.5, Water:0.5, Electric:0.5, Steel:0.5 },
  Fairy:    { Fighting:2, Dragon:2, Dark:2, Fire:0.5, Poison:0.5, Steel:0.5 }
};

function typeMultiplier(attackerTypes, defenderTypes) {
  let m = 1;
  attackerTypes.forEach(at => {
    defenderTypes.forEach(dt => {
      const eff = (typeChart[at] && typeChart[at][dt]) ?? 1;
      m *= eff;
    });
  });
  return m;
}

// ===================== DOM Elements =====================
const els = {
  raidBossSelect: document.getElementById('raidBossSelect'),
  teamSelect: document.getElementById('teamSelect'),
  startBtn: document.getElementById('startBattleBtn'),
  attackBtn: document.getElementById('attackBtn'),
  selectionArea: document.getElementById('selection-area'),
  battleArea: document.getElementById('battle-area'),
  bossImage: document.getElementById('bossImage'),
  bossHpBar: document.getElementById('bossHpBar'),
  bossHpText: document.getElementById('bossHpText'),
  playerTeam: document.getElementById('playerTeam'),
  log: document.getElementById('logContent'),
};

// ===================== Populate Selects =====================
function populateSelects() {
  els.raidBossSelect.innerHTML = '';
  els.teamSelect.innerHTML = '';
  pokemonList.forEach(p => {
    const bossOpt = document.createElement('option');
    bossOpt.value = p.name;
    bossOpt.textContent = `${p.name} (${p.types.join('/')})`;
    els.raidBossSelect.appendChild(bossOpt);

    const teamOpt = document.createElement('option');
    teamOpt.value = p.name;
    teamOpt.textContent = `${p.name} (${p.types.join('/')})`;
    els.teamSelect.appendChild(teamOpt);
  });
}
populateSelects();

// ===================== Battle State =====================
let boss = null;          // { baseData, currentHp, maxHp, cp, attack, img, types }
let team = [];            // array of same shape
let inBattle = false;
let actionLocked = false; // to prevent spamming Attack

// ===================== Helpers =====================
function logLine(html, cssClass = '') {
  const p = document.createElement('p');
  p.innerHTML = html;
  if (cssClass) p.className = cssClass;
  els.log.appendChild(p);
  els.log.scrollTop = els.log.scrollHeight;
}

function setHpBar(barEl, current, max) {
  const pct = Math.max(0, Math.min(100, (current / max) * 100));
  barEl.style.width = pct + '%';
  barEl.style.background = pct > 50 ? 'green' : pct > 20 ? 'orange' : 'red';
}

function shake(el) {
  el.classList.remove('shake');
  // force reflow to restart animation
  void el.offsetWidth;
  el.classList.add('shake');
}

function fadeOutAndRemove(container) {
  container.classList.add('fade-out');
  setTimeout(() => container.remove(), 600);
}

function colorForMultiplier(m) {
  if (m === 0) return 'color:#888;';
  if (m > 1.01) return 'color:#c0392b;font-weight:bold;';   // super effective (red)
  if (m < 0.99) return 'color:#2980b9;font-weight:bold;';   // not very effective (blue)
  return 'color:#444;';
}

// Basic damage formula (tuned for quick, punchy raids)
// - Players: use CP and Attack
// - Boss: scaled up stats (tougher)
function computeDamage(attacker, defender, isBossAttacker) {
  const base = (attacker.attack * 0.65) + (attacker.cp * 0.12);
  const rand = 0.85 + Math.random() * 0.3; // ±15%
  let dmg = Math.floor(base * rand);
  if (isBossAttacker) dmg = Math.floor(dmg * 1.15); // boss hits a bit harder baseline
  const mult = typeMultiplier(attacker.types, defender.types);
  return { damage: Math.max(1, Math.floor(dmg * mult)), mult };
}

// Build a UI card for a team Pokémon
function makeTeamCard(mon, index) {
  const wrap = document.createElement('div');
  wrap.className = 'pokemon-display';
  wrap.dataset.index = index;

 const img = document.createElement('img');
img.src = mon.img;
img.loading = "eager";   // mobile-safe
img.decoding = "async";
  img.alt = mon.name;

  const barC = document.createElement('div');
  barC.className = 'hp-bar-container';

  const bar = document.createElement('div');
  bar.className = 'hp-bar';

  const hpText = document.createElement('p');
  hpText.textContent = `${mon.name} — HP ${mon.currentHp}/${mon.maxHp}`;

  barC.appendChild(bar);
  wrap.appendChild(img);
  wrap.appendChild(barC);
  wrap.appendChild(hpText);

  mon._elements = { wrap, img, bar, hpText }; // keep refs on the object
  setHpBar(bar, mon.currentHp, mon.maxHp);

  return wrap;
}

function setBossUI() {
  els.bossImage.src = boss.img;
  els.bossImage.alt = boss.name;
  els.bossHpText.textContent = `${boss.name} — HP ${boss.currentHp}/${boss.maxHp}`;
  setHpBar(els.bossHpBar, boss.currentHp, boss.maxHp);
}

function updateMonUI(mon) {
  if (!mon._elements) return;
  mon._elements.hpText.textContent = `${mon.name} — HP ${mon.currentHp}/${mon.maxHp}`;
  setHpBar(mon._elements.bar, mon.currentHp, mon.maxHp);
}

// Get current active player Pokémon (first alive)
function getActiveMon() {
  return team.find(m => m.currentHp > 0) || null;
}

// Check end conditions
function checkEnd() {
  if (boss.currentHp <= 0) {
    logLine(`<strong style="color:#27ae60">Victory! ${boss.name} fainted.</strong>`);
    els.attackBtn.disabled = true;
    inBattle = false;
    return true;
  }
  const anyAlive = team.some(m => m.currentHp > 0);
  if (!anyAlive) {
    logLine(`<strong style="color:#c0392b">Defeat… Your team has fainted.</strong>`);
    els.attackBtn.disabled = true;
    inBattle = false;
    return true;
  }
  return false;
}

// ===================== Battle Flow =====================
function startBattle() {
  // Validate team selection (1–3)
  const chosenTeamNames = Array.from(els.teamSelect.selectedOptions).map(o => o.value);
  if (chosenTeamNames.length === 0 || chosenTeamNames.length > 3) {
    alert('Select between 1 and 3 Pokémon for your team.');
    return;
  }

  // Build boss
  const bossName = els.raidBossSelect.value;
  const baseBoss = pokemonList.find(p => p.name === bossName);
  // Boss gets extra CP/HP/Attack so it feels like a raid boss
  boss = {
    ...baseBoss,
    name: baseBoss.name,
    cp: Math.floor(baseBoss.cp * 1.6),
    attack: Math.floor(baseBoss.attack * 1.25),
    maxHp: Math.floor(baseBoss.hp * 5),
    currentHp: Math.floor(baseBoss.hp * 5)
  };

  // Build team
  team = chosenTeamNames.map(n => {
    const base = pokemonList.find(p => p.name === n);
    return {
      ...base,
      maxHp: Math.floor(base.hp * 2.2),
      currentHp: Math.floor(base.hp * 2.2)
    };
  });

  // UI setup
  els.selectionArea.classList.add('hidden');
  els.battleArea.classList.remove('hidden');
  els.playerTeam.innerHTML = '';
  team.forEach((m, i) => els.playerTeam.appendChild(makeTeamCard(m, i)));
  setBossUI();
  els.log.innerHTML = '';
  logLine(`<strong>Battle started!</strong> Boss: ${boss.name} (${boss.types.join('/')}) vs Team: ${team.map(t => t.name).join(', ')}.`);

  els.attackBtn.disabled = false;
  inBattle = true;
  actionLocked = false;
}

async function playerAttack() {
  if (!inBattle || actionLocked) return;
  const attacker = getActiveMon();
  if (!attacker) return; // team fainted safeguard
  actionLocked = true;

  // Player -> Boss
  const { damage, mult } = computeDamage(attacker, boss, false);
  boss.currentHp = Math.max(0, boss.currentHp - damage);
  shake(els.bossImage);
  setBossUI();

  const style = colorForMultiplier(mult);
  logLine(`<span style="${style}">${attacker.name} hits ${boss.name} for <strong>${damage}</strong> damage (${mult.toFixed(2)}×)</span>`);

  if (boss.currentHp <= 0) {
    // Faint boss
    els.bossImage.classList.add('fade-out');
    setTimeout(() => {
      els.bossImage.classList.remove('fade-out');
    }, 700);
    checkEnd();
    actionLocked = false;
    return;
  }

  // Boss auto-attacks back after small delay
  setTimeout(bossAttack, 550);
}

function bossAttack() {
  if (!inBattle) return;
  const defender = getActiveMon();
  if (!defender) {
    checkEnd();
    actionLocked = false;
    return;
  }

  const { damage, mult } = computeDamage(boss, defender, true);
  defender.currentHp = Math.max(0, defender.currentHp - damage);
  if (defender._elements) shake(defender._elements.img);
  updateMonUI(defender);

  const style = colorForMultiplier(mult);
  logLine(`<span style="${style}">${boss.name} strikes ${defender.name} for <strong>${damage}</strong> damage (${mult.toFixed(2)}×)</span>`);

  if (defender.currentHp <= 0) {
    // Faint animation + remove from field
    if (defender._elements) {
      fadeOutAndRemove(defender._elements.wrap);
      defender._elements = null;
    }
    logLine(`<em>${defender.name} fainted!</em>`);
  }

  // Check if battle ended, else unlock for next click
  if (!checkEnd()) {
    actionLocked = false;
  }
}

// ===================== Wire Up Buttons =====================
els.startBtn.addEventListener('click', startBattle);
els.attackBtn.addEventListener('click', playerAttack);

// Optional: limit selection to max 3 in the multiselect (UX nicety)
els.teamSelect.addEventListener('change', () => {
  const selected = Array.from(els.teamSelect.selectedOptions);
  if (selected.length > 3) {
    // Deselect the last one picked
    selected[selected.length - 1].selected = false;
    alert('Pick at most 3 Pokémon for your team.');
  }
});
